export type CityResponse = {
    offset:                   number;
    limit:                    number;
    returned_resultset:       City[];
    returned_resultset_size:  number;
    available_resultset_size: number;
}

export type City = {
    country_id: number;
    name:       string;
    id:         number;
}

export interface CountryResponse {
    offset:                   number;
    limit:                    number;
    returned_resultset:       Country[];
    returned_resultset_size:  number;
    available_resultset_size: number;
}

export interface Country {
    name: string;
    id:   number;
}
