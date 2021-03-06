import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, FlatList, Image, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';
import { Button, Item, Input, Label, Text } from 'native-base';
import Slider from "react-native-slider";
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './apply-funder-style';
import lnBackgroundColor from '../../config/linear-gradient-colors';
import { purchaseActions } from '../../redux/actions';
import LoadingView from '../../components/loading-view';

class ApplyFunderScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Solicitar credito',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      sliderValue: 0.5
    }
  }

  componentWillMount() {
    this.props.listFunders();
  }

  _applyFunderOnPress(item) {
    const funder = {
      balance: 3000,
      credit: 3000,
      status: 'await',
      name: item.name
    }

    this.props.applyFundersByUser(funder)
      .then(() => {
        this.props.navigation.goBack();
      });
  }

  renderLoadingInButton() {
    const { loading } = this.props.purchase;
    if (loading) {
      return <ActivityIndicator size="small" color="#fff" />
    }

    return <Text>Solicitar</Text>
  }

  renderItem(item) {
    return (
      <View style={styles.item}>
        <View style={styles.itemLogo}>
          <Icon name="credit-card" size={40} color='#DCDCDC' />
        </View>
        <View style={styles.itemDetails}>
          <View style={styles.viewTextContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
          </View>
          <View style={styles.viewTextContainer}>
            <Text style={styles.labelText}>Credito: </Text>
            <Text style={styles.valueText}>R$ 3.000,00</Text>
          </View>
          <View style={styles.viewSliderTextContainer}>
            <Slider
              value={this.state.sliderValue}
              trackStyle={styles.track}
              thumbStyle={styles.thumb}
              minimumTrackTintColor='#d14ba6'
              onValueChange={value => this.setState({ sliderValue: value })}
            />
          </View>
          <View style={styles.viewActionContainer}>
            <Button primary small block onPress={() => { this._applyFunderOnPress(item); }}>
              {this.renderLoadingInButton()}
            </Button>
          </View>
        </View>
      </View>

    );
  }

  render() {
    const { loading, funders, error } = this.props.purchase

    return (
      <LinearGradient colors={lnBackgroundColor.backgroundColor} style={styles.container}>
        <FlatList
          data={funders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </LinearGradient>
    );


  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    purchase: state.purchase
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(purchaseActions.actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyFunderScreen);