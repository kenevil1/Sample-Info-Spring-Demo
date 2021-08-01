import axios from 'axios';
import {useEffect, useState} from 'react';
import Card from './Card';

const RetrieveSamples = () => {
    const [getSamples, setSamples] = useState([]);

    // Fetches sample json from Spring server
    const fetchSamples = () => {
        axios.get('http://localhost:8080/').then((res) => {
            console.log(res.data.samples);
            setSamples(res.data.samples);
        });
    }

    useEffect(() => {
        fetchSamples();
    }, []);

    // Calculate how many days left until expiry
    const calculateDate = (expiryDate) => {
        var date = new Date(expiryDate);
        var timeInMs = date.getTime() - Date.now();
        return(Math.ceil(timeInMs / (1000 * 3600 * 24)));
    }

    // Iterates through samples and generates a card each
    return getSamples.map((sample, index) => {
        return (
            <Card key={index} name={sample.name} expiryInDays={calculateDate(sample.expiryDate)} sampleSource={sample.sampleSource}/>
        );
    });
}

export default RetrieveSamples;
