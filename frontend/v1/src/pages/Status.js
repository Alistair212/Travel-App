import { useState, React, useEffect } from 'react';


// const myURL = new URL('https://l4pf5hbqdd.execute-api.ap-southeast-2.amazonaws.com/Prod/get_country');
// console.log(myURL.searchParams.append('/1')
// fetch('https://l4pf5hbqdd.execute-api.ap-southeast-2.amazonaws.com/Prod/get_country/1')
//   .then((response) => response.json())
//   .then((data) => console.log(data));


const countryid = {
    'aus': 18,
    'usa':276,
    'uk':274
}

const c = countryid['aus'];

 const Status = (props) => {
    const [countryName, setCountryName] = useState('');
    const [latestNews, setLatestNews] = useState('');
    const [internationalRes, setInternationalRes] = useState('');
    const [internalRes, setInternalRes] = useState('');

    console.log('from country: ' + props.fromCountry);
    console.log('to country' + props.toCountry);

    const resp = async(id) => {
        try {
            const res = await fetch(`https://l4pf5hbqdd.execute-api.ap-southeast-2.amazonaws.com/Prod/all_info/${id}`)
            const jsonres = await res.json();

            setCountryName(jsonres.country_name);
            setLatestNews(jsonres.latest_news);
            setInternationalRes(jsonres.international_restrictions);
            setInternalRes(jsonres.international_restrictions);
        console.log(jsonres.country_name);
        return jsonres.country_name;
        }
        catch {}

    }

    useEffect(() => {
        resp(c);
    }, [countryName])


//JSON RESPONSE OBJECTS
//country_name
//latest_news
//international_restrictions
//internal_restrictions


  return (
    <>
    <div>Status</div>
    <br></br>
    <div>{countryName}</div>
    <br></br>
    <div>{latestNews}</div>
    <br></br>
    <div>{internationalRes}</div>
    <div>{internalRes}</div>
    </>
  )
}
export default Status
