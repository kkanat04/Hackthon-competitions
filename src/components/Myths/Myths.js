import React from 'react';
import classes from './Myths.module.css'
import './Myth.css'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));


const Myths = () => {
    const styles = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <div className={classes.wrap}>
            <div className={classes.topDiv}>
                <h1 className={classes.topText}>КАКИЕ МИФЫ ВЫ ЗНАЕТЕ О ВАКЦИНАХ?</h1>
                <p className={classes.topContext}>Давайте разберем, что из этого правда, а что нет</p>
            </div>
            <div className={classes.root}>
                <div className={classes.downBlock1}>
                    <Tabs 
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        <Tab className={classes.tab} label="МИФ: Вакцины небезопасны = ЛОЖНЫЙ" {...a11yProps(0)} />
                        <Tab className={classes.tab} label="МИФ: Вакцины вызывают аутизм = ЛОЖНЫЙ" {...a11yProps(1)} />
                        <Tab className={classes.tab} label="МИФ: Вакцины содержат ртуть, а это опасно = ЛОЖНЫЙ" {...a11yProps(2)} />
                        <Tab className={classes.tab} label="МИФ: Лучше переболеть и приобрести иммунитет,чем делать прививки = ЛОЖНЫЙ" {...a11yProps(3)} />
                        <Tab className={classes.tab} label="МИФ: Вакцинация частично ответственна за глобальное повышение частоты раковых заболеваний = ЛОЖНЫЙ" {...a11yProps(4)} />
                        <Tab className={classes.tab} label="МИФ: Привитые дети более подвержены аллергии, аутоиммунным и респираторным заболевани   ям, чем непривитые = ЛОЖНЫЙ" {...a11yProps(5)} />
                    </Tabs>
                </div>
                <div className={classes.downBlock2}>
                    <TabPanel value={value} index={0}>
                        <p className={classes.facts}>
                        ФАКТЫ: <br />
                        • При лицензировании вакцины проводится тщательная оценка и тестирование на безопасность и эффективность. <br />
                        • За каждой партией вакцины осуществляется отдельный контроль. <br />
                        • После преквалификации и лицензирования ВОЗ продолжает проводить мониторинг вакцины, и любые зарегистрированные серьезные побочные действия тщательно расследуются. <br />
                        </p>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <p className={classes.facts}>
                        ФАКТЫ: <br />
                        • Отсутствуют доказательства связи между вакциной против кори, паротита и краснухи (КПК) (или любой другой вакцины) и аутизмом или расстройствами аутистического спектра. <br />
                        • Исследование от 1998 г., в котором поднимался вопрос о возможной связи между вакциной КПК и аутизмом, было признано недостоверным, а статья была отозвана опубликовавшим ее журналом . <br />
                        • Автор данной публикации Andrew Wakefield в 2010 г. обвинен Генеральным медицинским советом в серьезном нарушении профессиональной этики и лишен права на врачебную практику в Великобритании. <br />
                        • Проведенное в 2002 г. в Дании исследование, охватившее 537 303 ребенка, предоставило убедительные доказательства отсутствия связи между вакциной КПК и аутизмом. У всех детей отсутствовала взаимосвязь между возрастом в период проведения вакцинации, временем, прошедшим с момента вакцинации или датой вакцинации, и временем появления признаков аутизма. <br />
                        </p>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <p className={classes.facts}>
                        ФАКТЫ: <br />
                        • Тиомерсал - это органическое вещество, содержащее этилртуть; оно добавляется в некоторые вакцины в качестве консерванта. <br />
                        • Лишь очень немногие вакцины содержат тиомерсал. <br />
                        • Ртуть - это природный элемент, содержащийся в воздухе, воде и почве. <br />
                        • В вакцинах содержится очень малое количество тиомерсала. <br />
                        • Отсутствуют доказательства того, что содержащееся в вакцинах количество тиомерсала, представляет какую- либо опасность для здоровья. <br />
                        </p>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <p className={classes.facts}>
                        ФАКТЫ: <br />
                        • Иммунный ответ на вакцины сходен с тем, что формируется при натуральной инфекции. <br />
                        • Ценой, которую придется заплатить за иммунитет вследствие натуральной инфекции, может быть отставание в умственном развитии в результате инфекции, вызванной Haemophilus in uenzae type b (Hib), врожденные пороки развития вследствие синдрома врожденной краснухи, рак печени в результате заражения гепатитом B или смерть от кори.   <br />
                        </p>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <p className={classes.facts}>
                        ФАКТЫ: <br />
                        • Вакцины не вызывают рака. <br />
                        • Вакцина против вируса папилломы человека используется для профилактики нескольких видов рака, в том числе рака шейки матки, анального отверстия, полового члена и ротоглотки. <br />
                        • Глобальное повышение частоты раковых заболеваний в мире за последние 50 лет обусловлено множеством причин, в том числе изменениями в образе жизни, большей продолжительностью жизни и более совершенными диагностическими методами. <br />
                        </p>
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <p className={classes.facts}>
                        ФАКТЫ: <br />
                        • Вакцины учат нашу иммунную систему реагировать на определенные антигены. Они не изменяют её работу. <br />
                        • Отсутствуют доказательства связи вакцинации с развитием аллергических, аутоиммунных и респираторных заболеваний в последующей жизни. <br />
                        </p>
                    </TabPanel>
                </div>
            </div>
        </div>
    );
};

export default Myths;