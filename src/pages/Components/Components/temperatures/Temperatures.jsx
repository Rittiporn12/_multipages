import { useState, useEffect } from 'react';
import Variable from '../Variable/Variable';
import './temperatures.css';

function Temperatures({name, celsiusValue}) {

    const [celsius, setCelsius] = useState(celsiusValue || 0);  // Ensure initial value is a number
    const [fahrenheit, setFahrenheit] = useState(celsiusValue ? celsiusValue * 1.8 + 32 : 32);
    const [kelvin, setKelvin] = useState(celsiusValue ? celsiusValue + 273.15 : 273.15);

    useEffect(() => {
        celsiusToOthers(celsius);
    }, [celsius]);

    useEffect(() => {
        fahrenheitToOthers(fahrenheit);
    }, [fahrenheit]);

    useEffect(() => {
        kelvinToOthers(kelvin);
    }, [kelvin]);

    // temperature conversions
    const celsiusToOthers = () => {
        if (celsius !== undefined && !isNaN(celsius)) {
            setFahrenheit(celsius * 1.8 + 32);
            setKelvin(celsius + 273.15);
        }
    }

    const fahrenheitToOthers = () => {
        if (fahrenheit !== undefined && !isNaN(fahrenheit)) {
            setCelsius((fahrenheit - 32) / 1.8);
            setKelvin((fahrenheit - 32) / 1.8 + 273.15);
        }
    }

    const kelvinToOthers = () => {
        if (kelvin !== undefined && !isNaN(kelvin)) {
            setCelsius(kelvin - 273.15);
            setFahrenheit((kelvin - 273.15) * 1.8 + 32);
        }
    }

    return ( 
        <div className='temperatures-container'>
            <h3 className='title'>{name || 'TEMPERATURES'}</h3>
            <h2 className='temperatures-display'>            
                <span className='badge bg-primary'>
                    {celsius !== undefined && !isNaN(celsius) ? celsius.toFixed(2) : 'N/A'} °C
                </span>
                <span className='badge bg-primary'>
                    {fahrenheit !== undefined && !isNaN(fahrenheit) ? fahrenheit.toFixed(2) : 'N/A'} °F
                </span>
                <span className='badge bg-primary'>
                    {kelvin !== undefined && !isNaN(kelvin) ? kelvin.toFixed(2) : 'N/A'} °K
                </span>
            </h2>
            <div className='temp-var'>
                <Variable name={'CELSIUS'} value={celsius} setValue={setCelsius} />
                <Variable name={'FAHRENHEIT'} value={fahrenheit} setValue={setFahrenheit} />
                <Variable name={'KELVIN'} value={kelvin} setValue={setKelvin} />
            </div>
        </div>
    );
}

export default Temperatures;
