import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import defaultMarkers from "./markers";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: '0 0 150px 0',
        minWidth: 120,
        width: '80%',
        padding: '10px 0 0',
        color: '#fff'
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, country, theme) {
    return {
        fontWeight:
            country.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
const StatisticInfrm = (props) => {

    const names = defaultMarkers.map(el => el)
    const classes = useStyles();
    const theme = useTheme();
    const [city, setCity] = useState('Кыргызстан')


    let mark
    useEffect(() => {
        mark = names.filter(el => {
            return el.city == city
        })
        props.onClickMarker(mark[0])
    }, [city])

    return (
        <div className="statisticInfrm">
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-name-label">Выберите Страну</InputLabel>
                <Select
                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    value={city}
                    onChange={(event) => {
                        setCity(event.target.value)
                    }}
                    input={<Input />}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem key={name.city} value={name.city} style={getStyles(name.city, city, theme)}>
                            {name.city}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

        </div >

    );
};

export default StatisticInfrm;