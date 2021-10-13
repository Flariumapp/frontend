import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

const CustomThemeProvider = ({ children, ...props }) => {
    return (
        <ThemeProvider theme={theme} {...props}>
            {children}
        </ThemeProvider>
    );
}

export default CustomThemeProvider;