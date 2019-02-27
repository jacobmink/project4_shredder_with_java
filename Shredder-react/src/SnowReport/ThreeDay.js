import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import snow from '../Images/snow.png';
import clearNight from '../Images/clear-night.png'
import cloudNight from '../Images/cloud-night.png';
import cloudy from '../Images/cloudy.png'
import partlyCloudy from '../Images/partly-cloudy.png';
import rain from '../Images/rain.png';
import sleet from '../Images/sleet.png';
import sunny from '../Images/sunny.png';
import wind from '../Images/wind.png'
import fog from '../Images/fog.png'

const ThreeDay = (props) => {
    // console.log(props.snowReport, 'props.snowReport on 3day');
    // let today = new Date();
    // const time = today.getHours() + today.getMinutes();
    // const hour = today.getHours();
    // console.log(time, 'time')
    // console.log(hour, 'hour');
    // console.log(typeof hour)
    // console.log(typeof time)
    console.log(props.snowReport, 'on threeday.js')
    const convertTime = (unixTime) => {
        // Months array
        let months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        // Convert timestamp to milliseconds
        let date = new Date(unixTime * 1000);
        // Year
        let year = date.getFullYear();
        // Month
        let month = months_arr[date.getMonth()];
        // Day
        let day = date.getDate();
        // Hours
        let hours = date.getHours();
        // Minutes
        let minutes = "0" + date.getMinutes();
        // Display date time in MM-dd-yyyy h:m:s format
        let convertedTime = month + '/' + day + '/' + year + ' ' + hours + ':' + minutes.substr(-2)
        return convertedTime;
    }

    const convertDate = (unixTime) => {
        // Months array
        let months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        // Convert timestamp to milliseconds
        let date = new Date(unixTime * 1000);
        // Year
        let year = date.getFullYear();
        // Month
        let month = months_arr[date.getMonth()];
        // Day
        let day = date.getDate();
        // Display date time in MM-dd-yyyy h:m:s format
        let convertedDate = month + '/' + day + '/' + year
        return convertedDate;
    }
   
    const checkIcon = (i) => {
        console.log('checkiconfunction')
        if(props.snowReport.daily.data[i].icon == 'snow'){
            return (
                <img src={snow} alt='snow'/>
            )
        } else if (props.snowReport.daily.data[i].icon == 'clear-night'){
            return(
                <img src={clearNight} alt='clear night'/>
            )
        } else if (props.snowReport.daily.data[i].icon == 'clear-day') {
            return (
                <img src={sunny} alt='sunny' />
            )
        } else if (props.snowReport.daily.data[i].icon == 'rain') {
            return (
                <img src={rain} alt='rain' />
            )
        } else if (props.snowReport.daily.data[i].icon == 'sleet') {
            return (
                <img src={sleet} alt='sleet' />
            )
        }
        else if (props.snowReport.daily.data[i].icon == 'wind') {
            return (
                <img src={wind} alt='windy' />
            )
        } else if (props.snowReport.daily.data[i].icon == 'cloudy') {
            return (
                <img src={cloudy} alt='cloudy' />
            )
        } else if (props.snowReport.daily.data[i].icon == 'partly-cloudy-day') {
            return (
                <img src={partlyCloudy} alt='partly cloudy' />
            )
        } else if (props.snowReport.daily.data[i].icon == 'partly-cloudy-night') {
            return (
                <img src={cloudNight} alt='partly cloudy night' />
            )
        } else if (props.snowReport.daily.data[i].icon == 'fog') {
            return (
                <img src={fog} alt='foggy' />
            )
        }
    }



    console.log(convertTime(props.snowReport.currently.time));
    console.log(convertDate(props.snowReport.currently.time));
    return (
        <div className='day-main'><br/><br/><h2>Weather Report</h2><br/>
            
            <h4>Weekly Summary<br /></h4>
            <h5>{props.snowReport.daily.summary}</h5>
                {/* icon: {props.snowReport.daily.icon} */}

            <Container>
               <br/><h4>Daily Reports</h4>
                <Row className='snow-row'>
                    <Col className='snow-col'>
                    <p className='snow-date'>{convertDate(props.snowReport.daily.data[0].time)}</p>

                    {props.snowReport.daily.data[0].summary}<br/><br/>
                    <div className='snow-icon-temp'>
                        {checkIcon(0)}<br/>
                        High: {props.snowReport.daily.data[0].temperatureHigh}°F<br/>
                        Low: {props.snowReport.daily.data[0].temperatureLow}°F
                    </div>
                    </Col>

                    <Col className='snow-col'>
                    <p className='snow-date'>{convertDate(props.snowReport.daily.data[1].time)}</p>
                    {props.snowReport.daily.data[1].summary}<br /><br />  
                    <div className='snow-icon-temp'>  
                        {checkIcon(1)}<br/>
                        High: {props.snowReport.daily.data[0].temperatureHigh}°F<br/>
                        Low: {props.snowReport.daily.data[0].temperatureLow}°F
                    </div>
                    </Col>

                    <Col className='snow-col'>
                    <p className='snow-date'> {convertDate(props.snowReport.daily.data[2].time)}</p>
                    {props.snowReport.daily.data[2].summary}<br /><br />
                    <div className='snow-icon-temp'>
                        {checkIcon(2)}<br />
                        High: {props.snowReport.daily.data[0].temperatureHigh}°F<br />
                        Low: {props.snowReport.daily.data[0].temperatureLow}°F
                    </div>
                    </Col>

                    <Col className='snow-col'>
                    <p className='snow-date'> {convertDate(props.snowReport.daily.data[3].time)}</p>
                    {props.snowReport.daily.data[3].summary}<br /><br />
                    <div className='snow-icon-temp'>
                        {checkIcon(3)}<br/>
                        High: {props.snowReport.daily.data[0].temperatureHigh}°F<br/>   
                        Low: {props.snowReport.daily.data[0].temperatureLow}°F
                    </div>
                    </Col>
                </Row>
            </Container>
            
        
            
        </div>
    )
}

export default ThreeDay;