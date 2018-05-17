import {
  TypeKeys,
  SetTimeBountyFieldAction,
  SetWindowSizeFieldAction,
  SetWindowStartFieldAction,
  SetScheduleTimestampFieldAction,
  SetScheduleTypeAction,
  SetSchedulingToggleAction,
  SetScheduleTimezoneAction,
  SetScheduleGasPriceFieldAction,
  SetScheduleGasLimitFieldAction,
  SetScheduleDepositFieldAction,
  SetScheduleParamsValidityAction,
  SetCurrentScheduleTimestampAction,
  SetCurrentScheduleTimezoneAction,
  SetCurrentScheduleTypeAction,
  SetCurrentSchedulingToggleAction,
  SetCurrentTimeBountyAction,
  SetCurrentWindowSizeAction,
  SetCurrentWindowStartAction
} from './types';

//#region Fields
export type TSetTimeBountyField = typeof setTimeBountyField;
export const setTimeBountyField = (
  payload: SetTimeBountyFieldAction['payload']
): SetTimeBountyFieldAction => ({
  type: TypeKeys.TIME_BOUNTY_FIELD_SET,
  payload
});

export type TSetWindowSizeField = typeof setWindowSizeField;
export const setWindowSizeField = (
  payload: SetWindowSizeFieldAction['payload']
): SetWindowSizeFieldAction => ({
  type: TypeKeys.WINDOW_SIZE_FIELD_SET,
  payload
});

export type TSetWindowStartField = typeof setWindowStartField;
export const setWindowStartField = (
  payload: SetWindowStartFieldAction['payload']
): SetWindowStartFieldAction => ({
  type: TypeKeys.WINDOW_START_FIELD_SET,
  payload
});

export type TSetScheduleTimestampField = typeof setScheduleTimestampField;
export const setScheduleTimestampField = (
  payload: SetScheduleTimestampFieldAction['payload']
): SetScheduleTimestampFieldAction => ({
  type: TypeKeys.SCHEDULE_TIMESTAMP_FIELD_SET,
  payload
});

export type TSetScheduleType = typeof setScheduleType;
export const setScheduleType = (
  payload: SetScheduleTypeAction['payload']
): SetScheduleTypeAction => ({
  type: TypeKeys.SCHEDULE_TYPE_SET,
  payload
});

export type TSetSchedulingToggle = typeof setSchedulingToggle;
export const setSchedulingToggle = (
  payload: SetSchedulingToggleAction['payload']
): SetSchedulingToggleAction => ({
  type: TypeKeys.SCHEDULING_TOGGLE_SET,
  payload
});

export type TSetScheduleTimezone = typeof setScheduleTimezone;
export const setScheduleTimezone = (
  payload: SetScheduleTimezoneAction['payload']
): SetScheduleTimezoneAction => ({
  type: TypeKeys.SCHEDULE_TIMEZONE_SET,
  payload
});

export type TSetScheduleGasPriceField = typeof setScheduleGasPriceField;
export const setScheduleGasPriceField = (payload: SetScheduleGasPriceFieldAction['payload']) => ({
  type: TypeKeys.SCHEDULE_GAS_PRICE_FIELD_SET,
  payload
});

export type TSetScheduleGasLimitField = typeof setScheduleGasLimitField;
export const setScheduleGasLimitField = (payload: SetScheduleGasLimitFieldAction['payload']) => ({
  type: TypeKeys.SCHEDULE_GAS_LIMIT_FIELD_SET,
  payload
});

export type TSetScheduleDepositField = typeof setScheduleDepositField;
export const setScheduleDepositField = (payload: SetScheduleDepositFieldAction['payload']) => ({
  type: TypeKeys.SCHEDULE_DEPOSIT_FIELD_SET,
  payload
});

export type TSetScheduleParamsValidity = typeof setScheduleParamsValidity;
export const setScheduleParamsValidity = (payload: SetScheduleParamsValidityAction['payload']) => ({
  type: TypeKeys.SCHEDULE_PARAMS_VALIDITY_SET,
  payload
});
//#endregion Fields

//#region Schedule Timestamp
export type TSetCurrentScheduleTimestamp = typeof setCurrentScheduleTimestamp;
export const setCurrentScheduleTimestamp = (
  payload: SetCurrentScheduleTimestampAction['payload']
): SetCurrentScheduleTimestampAction => ({
  type: TypeKeys.CURRENT_SCHEDULE_TIMESTAMP_SET,
  payload
});

export type TSetCurrentScheduleTimezone = typeof setCurrentScheduleTimezone;
export const setCurrentScheduleTimezone = (
  payload: SetCurrentScheduleTimezoneAction['payload']
): SetCurrentScheduleTimezoneAction => ({
  type: TypeKeys.CURRENT_SCHEDULE_TIMEZONE_SET,
  payload
});
//#endregion Schedule Timestamp

//#region Schedule Type
export type TSetCurrentScheduleType = typeof setCurrentScheduleType;
export const setCurrentScheduleType = (
  payload: SetCurrentScheduleTypeAction['payload']
): SetCurrentScheduleTypeAction => ({
  type: TypeKeys.CURRENT_SCHEDULE_TYPE,
  payload
});
//#endregion Schedule Type

//#region Scheduling Toggle
export type TSetCurrentSchedulingToggle = typeof setCurrentSchedulingToggle;
export const setCurrentSchedulingToggle = (
  payload: SetCurrentSchedulingToggleAction['payload']
): SetCurrentSchedulingToggleAction => ({
  type: TypeKeys.CURRENT_SCHEDULING_TOGGLE,
  payload
});
//#endregion Scheduling Toggle

//#region Time Bounty
export type TSetCurrentTimeBounty = typeof setCurrentTimeBounty;
export const setCurrentTimeBounty = (
  payload: SetCurrentTimeBountyAction['payload']
): SetCurrentTimeBountyAction => ({
  type: TypeKeys.CURRENT_TIME_BOUNTY_SET,
  payload
});
//#endregion Time Bounty

//#region Window Size
export type TSetCurrentWindowSize = typeof setCurrentWindowSize;
export const setCurrentWindowSize = (
  payload: SetCurrentWindowSizeAction['payload']
): SetCurrentWindowSizeAction => ({
  type: TypeKeys.CURRENT_WINDOW_SIZE_SET,
  payload
});
//#endregion Window Size

//#region Window Size
export type TSetCurrentWindowStart = typeof setCurrentWindowStart;
export const setCurrentWindowStart = (
  payload: SetCurrentWindowStartAction['payload']
): SetCurrentWindowStartAction => ({
  type: TypeKeys.CURRENT_WINDOW_START_SET,
  payload
});
//#endregion Window Size