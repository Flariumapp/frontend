import { useState, useRef, useEffect, useCallback } from 'react';
import axios from '../../axios-config';
import { Input } from 'antd';
import { Image, Text } from '../../UI';
import { Container, InputContainer, ResultContainer, ResultImage, ResultItem, ResultList, ResultText } from './styles';
import { galleryUrl } from '../../utility/media-url';
import { header } from '../../utility/header';
import { useSession } from 'next-auth/client';

const { Search } = Input;

const SearchInput = ({ searchId, type = 'location', size, value, setValue, width, placeholder }) => {
    const [session, loading] = useSession();
    const wrapperRef = useRef(null);

    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [searchIndex, setSearchIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    const resultSize = 30;

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setResults([]);
            }
        }

        const handleKeyDown = (e) => {
            const searchEle = document.getElementById(searchId);
            if (document.activeElement === searchEle) {
                const keyCode = e.code;
                if (keyCode === "ArrowUp") {
                    if (searchIndex > 0) {
                        setSearchIndex(prevState => prevState - 1);
                    } else {
                        setSearchIndex(results.length - 1);
                    }
                    // setValue(results[searchIndex].item);
                } else if(keyCode === "ArrowDown") {
                    if (searchIndex < results.length - 1) {
                        setSearchIndex(prevState => prevState + 1);
                    } else {
                        setSearchIndex(0);
                    }
                    // setValue(results[searchIndex].item);
                } else if (keyCode === "Enter") {
                    if (results.length > 0) {
                        setValue(results[searchIndex].item);
                        setSearch(results[searchIndex].item.name);
                        setResults([]);
                    } 
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        wrapperRef,
        results, 
        searchIndex, 
        type
    ]);

    useEffect(() => {
        if (value) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }, [value]);

    const handleSearch = useCallback(async () => {
        if (!loading && session) {
            if (search.trim().length > 0) {
                const response = await axios.get(`search?type=${type}&input=${search}`, header(session.jwt));
        
                if (response.status !== 200) {
                    return;
                }
        
                const { results } = response.data;
                setResults(results);
            } else {
                setResults([]);
                setValue(null);
            }
        }
    }, [search, session, type]);

    useEffect(() => {
        handleSearch();
        return () => {
            setResults([]);
        };
    }, [handleSearch]);


    return (
        <Container>
            <InputContainer>
                <Search
                    placeholder={placeholder}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onSearch={handleSearch}
                    enterButton
                    style={{ margin: 0, width }}
                    id={searchId}
                    autoComplete="off"
                    autoCorrect="off"
                    size={size}
                />
            </InputContainer>
            {
                results.length > 0 && visible &&
                (
                    <ResultContainer ref={wrapperRef}>
                        <ResultList>
                            {
                                results.map(({ item }, index) => {
                                    const modifiedGallery = type === 'location' ? item.gallery[0] : item.logo;
                                    return (
                                        <ResultItem isActive={index === searchIndex}>
                                            <ResultImage
                                                loader={() => galleryUrl(modifiedGallery)}
                                                src={galleryUrl(modifiedGallery)}
                                                alt={item.name}
                                                height={resultSize}
                                                width={resultSize}
                                                objectFit="cover"
                                            />
                                            <div style={{ width: 10 }} />
                                            <ResultText>{item.name}</ResultText>
                                        </ResultItem>
                                    );
                                })
                            }
                        </ResultList>
                    </ResultContainer>
                )
            }
        </Container>
    );
}

export default SearchInput;