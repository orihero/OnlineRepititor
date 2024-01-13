import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ArrowIcon} from '../../assets/icons/icon';
import {useGoBackHook} from '../../common/hooks';
import {useQuizHook} from './hooks';
import LottieView from 'lottie-react-native';

const QuizView = () => {
  const goBack = useGoBackHook();

  const {
    questions,
    title,
    currentQuestion,
    nextAllowed,
    score,
    onNextPress,
    onAnswerPress,
  } = useQuizHook();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <ArrowIcon />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      {score !== -1 ? (
        <View style={styles.content}>
          <LottieView
            source={require('../../assets/lottie/confetti.json')}
            autoPlay
            loop
            style={{
              width: Dimensions.get('screen').width,
              height: 400,
              alignSelf: 'center',
            }}
          />
          <LottieView
            source={require('../../assets/lottie/cup.json')}
            autoPlay
            loop
            style={{
              width: Dimensions.get('screen').width,
              height: 400,
              alignSelf: 'center',
              position: 'absolute',
              top: 0,
            }}
          />
          <Text style={{textAlign: 'center', fontSize: 20}}>
            Siz testni muvaffaqqiyatli topshirdingiz! Sizning korsatgichingiz:{' '}
            {Math.round(score)}%
          </Text>
        </View>
      ) : (
        <View style={styles.content}>
          <Text style={styles.questionText}>
            <Text style={(styles.questionText, {color: 'red'})}>
              {currentQuestion.index + 1}-SAVOL:{' '}
            </Text>
            {currentQuestion.question}
          </Text>
          <View>
            {currentQuestion.answers.map((e, i) => {
              return (
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 10,
                    borderRadius: 5,
                    backgroundColor:
                      i === currentQuestion.userChoice
                        ? '#FFE6B3'
                        : 'transparent',
                  }}
                  key={e}
                  onPress={() => onAnswerPress(i)}>
                  <Text style={styles.answerText}>
                    <Text style={[styles.answerText, {fontWeight: 'bold'}]}>
                      {String.fromCharCode(i + 65)}
                      {') '}
                    </Text>
                    {e}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      )}
      <TouchableOpacity
        disabled={!nextAllowed}
        onPress={onNextPress}
        style={[styles.button, !nextAllowed && {backgroundColor: 'gray'}]}>
        <Text style={styles.buttonText}>
          {score === -1 ? 'Keyingisi' : 'Tugatish'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizView;

const styles = StyleSheet.create({
  container: {flex: 1, paddingBottom: 20, paddingHorizontal: 20},
  content: {flex: 1},
  header: {
    marginTop: 36,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 30,
    color: '#343936',
    paddingTop: 26,
  },
  button: {
    marginTop: 16,
    width: '100%',
    height: 62,
    paddingVertical: 15,
    borderRadius: 30,
    backgroundColor: '#0600ac',
    shadowColor: 'rgba(41, 203, 115, 0.29)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 17,
    shadowOpacity: 1,
  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 30,
  },
  questionText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  answerText: {
    flexWrap: 'wrap',
    fontSize: 16,
    color: '#343936',
    marginVertical: 10,
  },
});
