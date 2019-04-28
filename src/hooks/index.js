import { StoreProvider, useStore, mainReducer } from "./store";
import { useDataApi } from "./useDataApi";
import useForm from "./useForm";
import useAuth from "./useAuth";
import {
  useUserLocations,
  useLocationWithComments,
  useAreaLocations
} from "./customQueryHooks";
import useKeyPress from "./useKeyPress";
import useWindowSize from "./useWindowSize";
import useInterval from "./useInterval";
import useKeyboardEvent from "./useKeyboardEvent";

export {
  StoreProvider,
  useStore,
  mainReducer,
  useDataApi,
  useForm,
  useAuth,
  useUserLocations,
  useLocationWithComments,
  useAreaLocations,
  useKeyPress,
  useWindowSize,
  useInterval,
  useKeyboardEvent
};
