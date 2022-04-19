import React, { useReducer, useState } from 'react';
import { isEmpty } from 'lodash';
import {
  createStyles,
  FormControl,
  FormHelperText,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { types } from '../../constants/actionTypes';
import { addGenericReducer, registerState } from '../stateReducer';
import {
  AppBarDrawerComponent,
  ASBButton,
  ASBTextField,
  DatepickerComponent,
} from '../../components';
import { syncValidator } from '../../utils/validator';
import { RegisterSchema } from '../validations';
import logger from '../../utils/winstonLogger';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 80,
    },
    textSize: {
      width: 480,
    },
    gridControl: {
      display: 'flex',
      flex: '1',
    },
    appBarMargin: {
      marginBottom: 10,
    },
  }),
);

const RegisterCard: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formdata, dispatch] = useReducer(addGenericReducer, registerState);

  const handleOnBurgerIconClick = () => {
    setDrawerOpen(true);
  };

  const handleOnDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleOnValueChange = (event: {
    target: { name: string; value: unknown };
  }): void => {
    const {
      target: { name, value },
    } = event;
    dispatch({ type: types.UPDATE, payload: { [name]: value } });
  };

  const handleOnBlur = () => {
    const validationErrors = syncValidator(RegisterSchema)(formdata);
    if (isEmpty(formdata.cardNumber)) validationErrors.cardNumber = '';
    if (isEmpty(formdata.cvc)) validationErrors.cvc = '';
    if (isEmpty(formdata.expiryDate)) validationErrors.expiryDate = '';
    dispatch({
      type: types.ERROR,
      payload: !isEmpty(validationErrors) ? validationErrors : {},
    });
  };

  const handleOnSave = () => {
    const validationErrors = syncValidator(RegisterSchema)(formdata);
    if (!isEmpty(validationErrors)) {
      dispatch({
        type: types.ERROR,
        payload: !isEmpty(validationErrors) ? validationErrors : {},
      });
    } else {
      logger.debug(formdata);
    }
  };

  return (
    <>
      <div className={classes.appBarMargin}>
        <AppBarDrawerComponent
          open={drawerOpen}
          onClose={handleOnDrawerClose}
          onOpen={handleOnBurgerIconClick}
        />
      </div>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        className={classes.root}
      >
        <Grid item xs={12}>
          <Typography variant="h3">{`Hello ${formdata.name}`}</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl margin="none" error={!!formdata.errors.cardNumber}>
            <ASBTextField
              fullWidth
              value={formdata.cardNumber}
              onChange={handleOnValueChange}
              onBlur={handleOnBlur}
              id="creditcardnumber"
              size="small"
              label="Credit Card Number"
              name="cardNumber"
              className={classes.textSize}
            />
            {formdata.errors.cardNumber && (
              <FormHelperText id="component-error-text">
                {formdata.errors.cardNumber}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} className={classes.gridControl}>
          <Grid item xs={6}>
            <FormControl margin="none" error={!!formdata.errors.cvc}>
              <ASBTextField
                fullWidth
                value={formdata.cvc}
                name="cvc"
                onBlur={handleOnBlur}
                onChange={handleOnValueChange}
                id="cvc"
                size="small"
                label="CVC"
              />
              {formdata.errors.cvc && (
                <FormHelperText id="component-error-text">
                  {formdata.errors.cvc}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl margin="none" error={!!formdata.errors.expiryDate}>
              <DatepickerComponent
                id="expiryDate"
                onChange={handleOnValueChange}
                onBlur={handleOnBlur}
                value={formdata.expiryDate}
                placeholder="DD/MM/YYYY"
                label="Expiry Date"
                name="expiryDate"
              />
              {formdata.errors.expiryDate && (
                <FormHelperText id="component-error-text">
                  {formdata.errors.expiryDate}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ASBButton
            data-testid="BtnCancel"
            size="medium"
            variant="contained"
            onClick={handleOnSave}
            color="primary"
          >
            Submit
          </ASBButton>
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterCard;
