import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

export default function CountriesList() {
  const [allCountriesData, setAllCountriesData] = useState([]);
  const [searchedCountriesData, setSearchedCountriesData] =
    useState(allCountriesData);
  const [allRegions, setAllRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  const countriesData = async () => {
    try {
      const url = "https://restcountries.com/v2/all";
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (e) {
      console.log("error", e.message);
    }
  };

  const findAllRegions = () => {
    const allRegions = allCountriesData.map((country) => {
      return country.region;
    });
    const uniqueRegions = allRegions.filter((region, index) => {
      return allRegions.indexOf(region) === index;
    });
    setAllRegions(uniqueRegions);
  };

  useEffect(() => {
    countriesData().then((data) => {
      //const parsedData = JSON.stringify(data);
      setAllCountriesData(data);
      setSearchedCountriesData(data);
    });
  }, []);

  useEffect(() => {
    findAllRegions();
  }, [allCountriesData]);

  const handleCountryInputChange = (e) => {
    const searchedList = allCountriesData.filter((country) => {
      return country.name
        .toLowerCase()
        .startsWith(e.target.value.toLowerCase());
    });
    setSearchedCountriesData(searchedList);
  };

  const handleRegionChange = async (e) => {
    setSelectedRegion(e.target.value);
  };

  useEffect(() => {
    const selectedRegionList = allCountriesData.filter((country) => {
      return country.region === selectedRegion;
    });
    setSearchedCountriesData(selectedRegionList);
  }, [selectedRegion]);

  return (
    <div>
      <input onChange={handleCountryInputChange}></input>
      <select onChange={handleRegionChange}>
        {allRegions.map((region, idx) => {
          return (
            <option value={region} key={idx}>
              {region}
            </option>
          );
        })}
      </select>
      {searchedCountriesData.map((country, idx) => {
        return (
          <CountryCard
            key={idx}
            name={country.name}
            region={country.region}
            capital={country.capital}
            population={country.population}
            img={country.flags.png}
          />
        );
      })}
    </div>
  );
}
