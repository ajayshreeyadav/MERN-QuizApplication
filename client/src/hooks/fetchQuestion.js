import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getServerData } from '../helper/helper';

// Redux action
import * as Action from '../redux/questionReducer';

// fetch question hook to fetch api data and set value to store
export const useFetchQuestion = () => {
  const dispatch = useDispatch();

  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData(prev => ({ ...prev, isLoading: true }));

    // Async function fetch backend data
    (async () => {
      try {
        const [{ questions, answers }] = await getServerData(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,
          data => data
        );
        if (questions.length > 0) {
          setGetData(prev => ({ ...prev, isLoading: false }));
          setGetData(prev => ({ ...prev, apiData: questions }));

          // Dispatch an action
          dispatch(Action.startExamAction({ question: questions, answers }));
        } else {
          throw new Error('No Question Available');
        }
      } catch (error) {
        setGetData(prev => ({ ...prev, isLoading: false }));
        setGetData(prev => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};

// MoveNextAction dispatch function
export const MoveNextQuestion = () => async dispatch => {
  try {
    dispatch(Action.moveNextAction()); // increase trace value by 1
  } catch (error) {
    console.log(error);
  }
};
// MovePrevAction dispatch function
export const MovePrevQuestion = () => async dispatch => {
  try {
    dispatch(Action.movePrevAction()); // decrease trace value by 1
  } catch (error) {
    console.log(error);
  }
};
