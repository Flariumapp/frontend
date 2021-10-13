import { CompanyList } from '../utility/company-list';
import { CompanyHash } from '../utility/company-map';

export const partners = CompanyList.map(company => ({
    id: company.id,
    brand: CompanyHash[company.name].brand,
    logo: CompanyHash[company.name].logo,
}));