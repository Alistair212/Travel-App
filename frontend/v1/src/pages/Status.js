import { useState, React, useEffect } from 'react';
import Selectedfrom from '../components/Selectedfrom';
import UndoIcon from '@mui/icons-material/Undo';
import { useNavigate } from 'react-router-dom';


const countryid = {
    'aus': 18,
    'usa':276,
    'uk':274
}


 const Status = (props) => {
    const [countryName, setCountryName] = useState('');
    const [latestNews, setLatestNews] = useState('');
    const [internationalRes, setInternationalRes] = useState('');
    const [internalRes, setInternalRes] = useState('');
    const navigate = useNavigate();

    console.log('from country: ' + props.fromCountry);
    console.log('to country' + props.toCountry);
    const c = countryid[props.toCountry];

    const resp = async(id) => {
        try {
            const res = await fetch(`https://l4pf5hbqdd.execute-api.ap-southeast-2.amazonaws.com/Prod/all_info/${id}`)
            const jsonres = await res.json();

            setCountryName(jsonres.country_name);
            setLatestNews(jsonres.latest_news);
            setInternationalRes(jsonres.international_restrictions);
            setInternalRes(jsonres.internal_restrictions);
        console.log(jsonres.country_name);
        return jsonres.country_name;
        }
        catch {}

    }

    useEffect(() => {
        resp(c);
    }, [countryName, internalRes, latestNews, internationalRes])


//JSON RESPONSE OBJECTS
//country_name
//latest_news
//international_restrictions
//internal_restrictions


  return (
    <>
        <div className="bttopp">
            <Selectedfrom countryval={props.toCountry}  />
        </div>
        <div class="omg_add_space_here"><br></br>
            <div><h1>Country: {countryName}</h1></div><br></br>
            <h2>Latest news: </h2>
            <div>{latestNews}</div><br></br>
            <h2>International Restrictions: </h2>
            <div>{internationalRes}</div><br></br><br></br>
            <h2>Internal Restrictions: </h2>
            <div class="bottomdiv">{internalRes}</div>
        </div>
        <UndoIcon onClick={() => navigate(-1)}/>
    </>
  )
}
export default Status
