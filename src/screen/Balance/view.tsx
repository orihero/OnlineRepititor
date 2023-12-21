import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { BalanceCostIcon } from "../../assets/icons/icon";
import { REPLENISHMENT_MTHODS } from "../../constant";
import BalanceHooks from './hooks'

const BalanceScreen = () => {
  const [card, setCard] = useState<any | null>(false);
  const [isSelected, setIsSelected] = useState<number | null>(0);
  const {onBalanceHooks} = BalanceHooks()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.balanceContainer}>
          <View>
            <Text style={styles.title}>Баланс</Text>
            <View style={styles.totalCard}>
              {/* <BalanceScreen/> */}
              <BalanceCostIcon />
              <View style={styles.price}>
                <Text style={styles.priceText}>На счету:</Text>
                <Text style={styles.priceNumber}>30$</Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.cardTitle}>Способы пополнения</Text>
            <View style={styles.cards}>
              {REPLENISHMENT_MTHODS.map((e, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={[styles.card, card && styles.active]}
                    onPress={() => {
                      setCard(!card);
                    }}
                  >
                    <Image source={e.images} />
                  </TouchableOpacity>
                );
              })}
            </View>
            <TouchableOpacity style={styles.button} onPress={onBalanceHooks}>
              <Text style={styles.buttonText}>Пополить</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BalanceScreen;
