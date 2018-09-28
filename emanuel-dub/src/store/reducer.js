import * as actionTypes from './actions';

const initialState = {
  certifiedPlumber: {
    key: 'certifiedPlumber',
    label: 'Certified Plumber',
    isChecked: false,
  },
  carpentryExperience: {
    key: 'carpentryExperience',
    label: 'Carpentry Experience',
    isChecked: false,
  },
  certifiedElectrician: {
    key: 'certifiedElectrician',
    label: 'Certified Electrician',
    isChecked: false,
  },
  bartendingExperience: {
    key: 'bartendingExperience',
    label: 'Bartending Experience',
    isChecked: false,
  },
  foodHygiene: {
    key: 'foodHygiene',
    label: 'Food Hygiene Certificate',
    isChecked: false,
  },
  firstAid: {
    key: 'firstAid',
    label: 'First Aid Course',
    isChecked: false,
  },
  forkLiftDrive: {
    key: 'forkLiftDrive',
    label: 'Forklift Drive Certificate',
    isChecked: false,
  },
  driversLicence: {
    key: 'driversLicence',
    label: "Driver's Licence (Type B)",
    isChecked: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CERTIFIED_PLUMBER:
      return {
        ...state,
        certifiedPlumber: {
          ...state.certifiedPlumber,
          isChecked: action.payload,
        },
      };
    case actionTypes.CARPENTRY_EXPERIENCE:
      return {
        ...state,
        carpentryExperience: {
          ...state.carpentryExperience,
          isChecked: action.payload,
        },
      };
    case actionTypes.CERTIFIED_ELECTRICIAN:
      return {
        ...state,
        certifiedElectrician: {
          ...state.certifiedElectrician,
          isChecked: action.payload,
        },
      };
    case actionTypes.BARTENDING_EXPERIENCE:
      return {
        ...state,
        bartendingExperience: {
          ...state.bartendingExperience,
          isChecked: action.payload,
        },
      };
    case actionTypes.FOOD_HYGIENE:
      return {
        ...state,
        foodHygiene: {
          ...state.foodHygiene,
          isChecked: action.payload,
        },
      };
    case actionTypes.FIRST_AID:
      return {
        ...state,
        firstAid: {
          ...state.firstAid,
          isChecked: action.payload,
        },
      };
    case actionTypes.FORKLIFT_DRIVE:
      return {
        ...state,
        forkLiftDrive: {
          ...state.forkLiftDrive,
          isChecked: action.payload,
        },
      };
    case actionTypes.DRIVERS_LICENCE:
      return {
        ...state,
        driversLicence: {
          ...state.driversLicence,
          isChecked: action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
