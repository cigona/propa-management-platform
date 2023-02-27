import { create } from "zustand"
import { getCities, getCountries } from "../api/location/city"
import { CityResponse, CountryResponse } from "../types/location/location.type"
import { useMessageStore } from "./errors"
import { logger } from "./middleware/logger"

type locationState = {
    cities: CityResponse
    countries: CountryResponse
    setCities: (c: CityResponse) => void
    setCountries: (c: CountryResponse) => void
    fetchCities: (id: number) => void
    fetchCountries: () => void
}

export const useLocationStore = create<locationState>()(
    logger(
        (set) => ({
            cities: {} as CityResponse,
            countries: {} as CountryResponse,
            setCities: (c) => set((state) => ({cities: c})),
            setCountries: (c) => set((state) => ({countries: c})),
            fetchCities: async (id) => {
                const data = await getCities(id)
                if (data.name === 'AxiosError') {
                    useMessageStore.getState().setError({ message: data.response.data || 'An error occured', isError: true })
                    return;
                } else {
                    set(({ cities: data }));
                    return data;
                }
            },
            fetchCountries: async () => {
                const data = await getCountries()
                if (data.name === 'AxiosError') {
                    useMessageStore.getState().setError({ message: data.response.data || 'An error occured', isError: true })
                    return;
                } else {
                    set(({ countries: data }));
                    return data;
                }
            },
        })
    )
)