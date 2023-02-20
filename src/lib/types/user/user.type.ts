export type profile = {
    first_name:     string;
    middle_name?:      string;
    last_name:      string;
    country_id?:     string;
    city_id?:        string;
    postal_address?: string;
    postal_code?:    string;
    email:          string;
    phone:   string;
    manager?:        boolean;
    owner?:          boolean;
    password:       string;
    title:      string;
}

export interface User {
    first_name:     string;
    last_name:      string;
    country_id?:     string;
    city_id?:        string;
    postal_address?: string;
    postal_code?:    string;
    email:          string;
    phone:   string;
    manager?:        boolean;
    owner?:          boolean;
    password:       string;
}
