import React from 'react'
import './Online.css'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Modal from '../Modal/Modal';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
      color:'white',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      color:'white',
    },
  }));

export default function Online() {
    const classes = useStyles();
    const [city, setCity] = React.useState('');
    const [val, setVal] = React.useState();
    const [modal, setModal] = React.useState(false);
    const [ques, setQues] = React.useState();
    const [open, setOpen] = React.useState(false);
    
    const handleClick = ()=> {
        setQues(true)
        setOpen(true)
    }
    const handleChange = (event) => {
        setCity(event.target.value);
      };
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
      function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    return (
        <div className="online__wrap">
            <div className="online__firstBox">
                <p className="online__firstText">ГРАФИК РАБОТЫ ПРИВИВОЧНЫХ ПУНКТОВ <br /> ОТ COVID-19 г. БИШКЕК и г. ОШ</p>
            </div>
            <div className="online__secondBox">
                <p className="online__city">Выберите город:</p>
                    <FormControl className={classes.formControl}>
                        <Select 
                        value={city}
                        onChange={handleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem value="" onClick={()=> setVal()}>
                            <em>------</em>
                        </MenuItem>
                        <MenuItem onClick={()=> setVal(true)} value={10}>БИШКЕК</MenuItem>
                        <MenuItem onClick={()=> setVal(false)} value={20}>ОШ</MenuItem>
                        </Select>
                    </FormControl>

                    <div className={val == true ? 'online__bish__active' : 'online__bish'}>
                        <div className="online__bish__address">
                            <p>  <span className="online__bishSpan">Адрес:</span> ЦСМ №18 Октябрьского района </p>
                            <p><span className="online__bishSpan">Телефон: </span> 0312 56 82 33</p>
                        </div>
                        <div className="online__bish__address">
                            <p>  <span className="online__bishSpan">Адрес:</span> ОЦСМ Ленинского района </p>
                            <p><span className="online__bishSpan">Телефон: </span> 0312 64 45 57</p>
                        </div>
                        <div className="online__bish__address">
                            <p>  <span className="online__bishSpan">Адрес:</span> ЦСМ №14 Первомайского района</p>
                            <p><span className="online__bishSpan">Телефон: </span> 0500 008 208</p>
                        </div>
                        <div className="online__bish__address">
                            <p>  <span className="online__bishSpan">Адрес:</span> ЦСМ №8 Свердловского района</p>
                            <p><span className="online__bishSpan">Телефон: </span> 0551 117 744</p>
                        </div>
                        <div className="online__bish__address">
                            <p>  <span className="online__bishSpan">Адрес:</span> ОЦСМ Первомайского района</p>
                            <p><span className="online__bishSpan">Телефон: </span> 0550 701 002</p>
                        </div>
                        <div className="online__bish__address">
                            <p>  <span className="online__bishSpan">Адрес:</span> ОЦСМ Свердловского района </p>
                            <p><span className="online__bishSpan">Телефон: </span> 0505 286 670</p>
                        </div>
                        <div className="online__bish__address">
                            <p> <span className="online__bishSpan">Адрес:</span> ОЦСМ Октябрьского района </p>
                            <p><span className="online__bishSpan">Телефон: </span> 0703 293 793</p>
                        </div>
                    </div>




                    <div className={val  == false ? 'online__osh__active' : 'online__osh'}>

                        <div className="online__bish__address">
                            <p>  <span className="online__bishSpan">Адрес:</span> ЦСМ г. Ош, ул.Р.Абдыкадырова 9</p>
                            <p><span className="online__bishSpan">Телефон: </span> 0702617107</p>
                        </div>
                        <div className="online__bish__address">
                            <p>  <span className="online__bishSpan">Адрес:</span>Филиал № 1, ул.Заднепровская 16</p>
                            <p><span className="online__bishSpan">Телефон: </span> 0556649411</p>
                        </div>
                        <div className="online__bish__address">
                            <p>  <span className="online__bishSpan">Адрес:</span> Филиал № 2, ул.Латипжанова 1</p>
                            <p><span className="online__bishSpan">Телефон: </span> 0771007041</p>
                        </div>
                        <div className="online__bish__address">
                            <p>  <span className="online__bishSpan">Адрес:</span> Филиал № 3, ул.Мамырова 95а</p>
                            <p><span className="online__bishSpan">Телефон: </span> 0702617107</p>
                        </div>
                        <div className="online__bish__address">
                            <p>  <span className="online__bishSpan">Адрес:</span> Филиал № 4, ул.Чкалова 23</p>
                            <p><span className="online__bishSpan">Телефон: </span> 0770749749</p>
                        </div>
                        <div className="online__bish__address">
                            <p>  <span className="online__bishSpan">Адрес:</span>Филиал № 5, ул.Кокумбий 27</p>
                            <p><span className="online__bishSpan">Телефон: </span> 0778412653</p>
                        </div>
                        <div className="online__bish__address">
                            <p>  <span className="online__bishSpan">Адрес:</span>Филиал № 6, ул.Каримова 2</p>
                            <p><span className="online__bishSpan">Телефон: </span> 0777553008</p>
                        </div>
                    </div>

                    <div className={ ques == true ? 'online__ques__active' : "online__ques"}>
                        <p className="online__quesText">Провакцинировались ли вы уже?</p>
                        <div style={{display:'flex', justifyContent:'space-around', width:'100%'}}>
                            <div onClick={()=> setModal(true)} className="online__openMod"><p className="online__openModP">да</p></div>
                            <div onClick={handleClick} className="online__closeQues"><p className="online__closeQuesP">нет</p></div>
                        </div>
                    </div>
                </div>  
                <Modal modal={modal} setModal={setModal} />

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Не забудьте оставить отзыв после получения вакцины!
                    </Alert>
                </Snackbar>
        </div>
    )
}