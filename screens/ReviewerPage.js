import * as React from 'react';
import { Button, StyleSheet, View, Image, TextInput } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const TestReviewer = () => {
  const [value, setValue] = React.useState('');
  const [tempvalue, settempValue] = React.useState(''); 
  const [supvalue, setsupValue] = React.useState(''); 
  const [techvalue, settechValue] = React.useState(''); 
  const [scopevalue, setscopeValue] = React.useState(''); 

  return (
    <View style = {styles.container}>
      <Text style = {{ color: '#CFC493', fontSize: 32,  fontFamily: 'Garamond'}}>
        Please complete scoring for the following paper below
      </Text>
      <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 200, marginBottom: 10, fontFamily: 'Garamond'}}>
        Appropriateness of Topic 
      </Text> 
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View style={{ flexDirection: 'row', alignContent: 'center' }}>
          <View>
            <Text>1</Text>
            <RadioButton
            value="first"
            status={ value === 'first' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>2</Text>
            <RadioButton
            value="second"
            status={ value === 'second' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>3</Text>
            <RadioButton
            value="third"
            status={ value === 'third' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>4</Text>
            <RadioButton
            value="fourth"
            status={ value === 'fourth' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>5</Text>
            <RadioButton
            value="fifth"
            status={ value === 'fifth' ? 'checked' : 'unchecked' }
            />
          </View>
        </View>
      </RadioButton.Group>

      <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 20, marginBottom: 10, fontFamily: 'Garamond'}}>
        Timelieness of Topic
      </Text> 
      <RadioButton.Group onValueChange={newValue => settempValue(newValue)} tempvalue={value}>
        <View style={{ flexDirection: 'row', alignContent: 'center' }}>
          <View>
            <Text>1</Text>
            <RadioButton
            value="first"
            status={ tempvalue === 'first' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>2</Text>
            <RadioButton
            value="second"
            status={ tempvalue === 'second' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>3</Text>
            <RadioButton
            value="third"
            status={ tempvalue === 'third' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>4</Text>
            <RadioButton
            value="fourth"
            status={ tempvalue === 'fourth' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>5</Text>
            <RadioButton
            value="fifth"
            status={ tempvalue === 'fifth' ? 'checked' : 'unchecked' }
            />
          </View>
        </View>
      </RadioButton.Group>

      <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 20, marginBottom: 10, fontFamily: 'Garamond'}}>
        Supportive Evidence
      </Text> 
      <RadioButton.Group onValueChange={newValue => setsupValue(newValue)} supvalue={value}>
        <View style={{ flexDirection: 'row', alignContent: 'center' }}>
          <View>
            <Text>1</Text>
            <RadioButton
            value="first"
            status={ supvalue === 'first' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>2</Text>
            <RadioButton
            value="second"
            status={ supvalue === 'second' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>3</Text>
            <RadioButton
            value="third"
            status={ supvalue === 'third' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>4</Text>
            <RadioButton
            value="fourth"
            status={ supvalue === 'fourth' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>5</Text>
            <RadioButton
            value="fifth"
            status={ supvalue === 'fifth' ? 'checked' : 'unchecked' }
            />
          </View>
        </View>
      </RadioButton.Group>

      <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 20, marginBottom: 10, fontFamily: 'Garamond'}}>
        Technical Quality
      </Text> 
      <RadioButton.Group onValueChange={newValue => settechValue(newValue)} techvalue={value}>
        <View style={{ flexDirection: 'row', alignContent: 'center' }}>
          <View>
            <Text>1</Text>
            <RadioButton
            value="first"
            status={ techvalue === 'first' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>2</Text>
            <RadioButton
            value="second"
            status={ techvalue === 'second' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>3</Text>
            <RadioButton
            value="third"
            status={ techvalue === 'third' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>4</Text>
            <RadioButton
            value="fourth"
            status={ techvalue === 'fourth' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>5</Text>
            <RadioButton
            value="fifth"
            status={ techvalue === 'fifth' ? 'checked' : 'unchecked' }
            />
          </View>
        </View>
      </RadioButton.Group>

      <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 20, marginBottom: 10, fontFamily: 'Garamond'}}>
        Scope of Coverage
      </Text> 
      <RadioButton.Group onValueChange={newValue => setscopeValue(newValue)} scopevalue={value}>
        <View style={{ flexDirection: 'row', alignContent: 'center' }}>
          <View>
            <Text>1</Text>
            <RadioButton
            value="first"
            status={ scopevalue === 'first' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>2</Text>
            <RadioButton
            value="second"
            status={ scopevalue === 'second' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>3</Text>
            <RadioButton
            value="third"
            status={ scopevalue === 'third' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>4</Text>
            <RadioButton
            value="fourth"
            status={ scopevalue === 'fourth' ? 'checked' : 'unchecked' }
            />
          </View>
          <View>
            <Text>5</Text>
            <RadioButton
            value="fifth"
            status={ scopevalue === 'fifth' ? 'checked' : 'unchecked' }
            />
          </View>
        </View>
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006747',
    alignItems: 'center',
    alignContent: 'center'
  },

  button: {
    flexDirection: "row", 
    justifyContent: "space-around", 
    backgroundColor: 'green', 
  }, 
});
export default TestReviewer;