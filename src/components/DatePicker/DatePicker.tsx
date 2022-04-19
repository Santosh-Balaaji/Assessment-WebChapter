import React from 'react';
import PropTypes from 'prop-types';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import {
  createStyles,
  Grid,
  makeStyles,
  TextField,
  Theme,
} from '@material-ui/core';
import classNames from 'classnames';
import { IDatepickerComponent } from '../../utils/interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiOutlinedInput-adornedEnd': {
        paddingRight: 0,
      },
      '& .MuiButtonBase-root.MuiIconButton-root': {
        padding: theme.spacing(1),
      },
      '& .MuiSvgIcon-root path:nth-of-type(1)': {
        color: '#babacc',
      },
    },
  }),
);

const TxtField = ({ ...props }) => {
  return <TextField {...props} size="small" />;
};

const DatepickerComponent: React.FC<IDatepickerComponent> = ({
  name,
  id,
  value,
  onChange,
  onBlur,
  placeholder,
  label,
  size,
  ...props
}): JSX.Element => {
  const classes = useStyles();
  const dateFormat = 'DD-MM-YYYY';
  const handleDateChange = (date: MaterialUiPickersDate): void => {
    const selected = moment(date);
    const formatDate = selected.format(dateFormat);
    const evt = {
      target: {
        value: formatDate === 'Invalid date' ? null : formatDate,
        name,
        id,
      },
    };
    if (onChange) {
      onChange(evt);
    }
  };
  const selectedDate = value ? moment(value, dateFormat) : null;

  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Grid
          container
          className={classNames(classes.root, 'datepicker')}
          justify="space-between"
          data-id="date-grid-container"
        >
          <KeyboardDatePicker
            data-testid="keyboardDatePicker"
            disableToolbar
            variant="inline"
            id={id}
            label={label}
            format="DD-MM-YYYY"
            value={selectedDate}
            onChange={handleDateChange}
            onBlur={onBlur}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            autoOk
            TextFieldComponent={TxtField}
            inputVariant="outlined"
            {...props}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </>
  );
};

DatepickerComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

DatepickerComponent.defaultProps = {
  placeholder: '',
  label: '',
  value: null,
};

export default DatepickerComponent;
