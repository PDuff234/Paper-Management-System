import * as React from 'react';
import { Button, StyleSheet, View, Image, TextInput, ScrollView } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const TestReviewer = () => {
  const [value, setValue] = React.useState('');
  const [tempvalue, settempValue] = React.useState(''); 
  const [supvalue, setsupValue] = React.useState(''); 
  const [techvalue, settechValue] = React.useState(''); 
  const [scopevalue, setscopeValue] = React.useState(''); 
  const [citationvalue, setcitationValue] = React.useState(''); 
  const [originalityvalue, setoriginalityValue] = React.useState(''); 
  const [papercommentvalue, setpapercommentValue] = React.useState(''); 
  const [paperorganizationvalue, setpaperorganizationValue] = React.useState(''); 
  const [paperclarityvalue, setpaperclarityValue] = React.useState(''); 
  const [messageclarityvalue, setmessageclarityValue] = React.useState(''); 
  const [mechanicsvalue, setmechanicsValue] = React.useState(''); 
  const [documentcommentvalue, setdocumentcommentValue] = React.useState(''); 
  const [suitabiltyvalue, setsuitabiltyValue] = React.useState(''); 
  const [potentialinterestvalue, setpotentialinterestValue] = React.useState(''); 
  const [potentialoralvalue, setpotentialoralValue] = React.useState(''); 

  return (
    <View style = {styles.container}>
      <ScrollView contentContainerStyle = {{ flexGrow: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginHorizontal: 40 }}>
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

        <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 20, marginBottom: 10, fontFamily: 'Garamond'}}>
          Citation of Previous Work
        </Text> 
        <RadioButton.Group onValueChange={newValue => setcitationValue(newValue)} citationvalue={value}>
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <View>
              <Text>1</Text>
              <RadioButton
              value="first"
              status={ citationvalue === 'first' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>2</Text>
              <RadioButton
              value="second"
              status={ citationvalue === 'second' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>3</Text>
              <RadioButton
              value="third"
              status={ citationvalue === 'third' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>4</Text>
              <RadioButton
              value="fourth"
              status={ citationvalue === 'fourth' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>5</Text>
              <RadioButton
              value="fifth"
              status={ citationvalue === 'fifth' ? 'checked' : 'unchecked' }
              />
            </View>
          </View>
        </RadioButton.Group>

        <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 20, marginBottom: 10, fontFamily: 'Garamond'}}>
          Originality
        </Text> 
        <RadioButton.Group onValueChange={newValue => setoriginalityValue(newValue)} originalityvalue={value}>
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <View>
              <Text>1</Text>
              <RadioButton
              value="first"
              status={ originalityvalue === 'first' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>2</Text>
              <RadioButton
              value="second"
              status={ originalityvalue === 'second' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>3</Text>
              <RadioButton
              value="third"
              status={ originalityvalue === 'third' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>4</Text>
              <RadioButton
              value="fourth"
              status={ originalityvalue === 'fourth' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>5</Text>
              <RadioButton
              value="fifth"
              status={ originalityvalue === 'fifth' ? 'checked' : 'unchecked' }
              />
            </View>
          </View>
        </RadioButton.Group>

        <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 20, marginBottom: 10, fontFamily: 'Garamond'}}>
          Comments on Content
        </Text> 
        <RadioButton.Group onValueChange={newValue => setpapercommentValue(newValue)} papercommentvalue={value}>
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <View>
              <Text>1</Text>
              <RadioButton
              value="first"
              status={ papercommentvalue === 'first' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>2</Text>
              <RadioButton
              value="second"
              status={ papercommentvalue === 'second' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>3</Text>
              <RadioButton
              value="third"
              status={ papercommentvalue === 'third' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>4</Text>
              <RadioButton
              value="fourth"
              status={ papercommentvalue === 'fourth' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>5</Text>
              <RadioButton
              value="fifth"
              status={ papercommentvalue === 'fifth' ? 'checked' : 'unchecked' }
              />
            </View>
          </View>
        </RadioButton.Group>

        <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 20, marginBottom: 10, fontFamily: 'Garamond'}}>
          Organization of Paper
        </Text> 
        <RadioButton.Group onValueChange={newValue => setpaperorganizationValue(newValue)} paperorganizationvalue={value}>
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <View>
              <Text>1</Text>
              <RadioButton
              value="first"
              status={ paperorganizationvalue === 'first' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>2</Text>
              <RadioButton
              value="second"
              status={ paperorganizationvalue === 'second' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>3</Text>
              <RadioButton
              value="third"
              status={ paperorganizationvalue === 'third' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>4</Text>
              <RadioButton
              value="fourth"
              status={ paperorganizationvalue === 'fourth' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>5</Text>
              <RadioButton
              value="fifth"
              status={ paperorganizationvalue === 'fifth' ? 'checked' : 'unchecked' }
              />
            </View>
          </View>
        </RadioButton.Group>

        <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 20, marginBottom: 10, fontFamily: 'Garamond'}}>
          Clarity of Paper
        </Text> 
        <RadioButton.Group onValueChange={newValue => setpaperclarityValue(newValue)} paperclarityvalue={value}>
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <View>
              <Text>1</Text>
              <RadioButton
              value="first"
              status={ paperclarityvalue === 'first' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>2</Text>
              <RadioButton
              value="second"
              status={ paperclarityvalue === 'second' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>3</Text>
              <RadioButton
              value="third"
              status={ paperclarityvalue === 'third' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>4</Text>
              <RadioButton
              value="fourth"
              status={ paperclarityvalue === 'fourth' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>5</Text>
              <RadioButton
              value="fifth"
              status={ paperclarityvalue === 'fifth' ? 'checked' : 'unchecked' }
              />
            </View>
          </View>
        </RadioButton.Group>

        <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 20, marginBottom: 10, fontFamily: 'Garamond'}}>
          Clarity of Main Message
        </Text> 
        <RadioButton.Group onValueChange={newValue => setmessageclarityValue(newValue)} messageclarityvalue={value}>
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <View>
              <Text>1</Text>
              <RadioButton
              value="first"
              status={ messageclarityvalue === 'first' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>2</Text>
              <RadioButton
              value="second"
              status={ messageclarityvalue === 'second' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>3</Text>
              <RadioButton
              value="third"
              status={ messageclarityvalue === 'third' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>4</Text>
              <RadioButton
              value="fourth"
              status={ messageclarityvalue === 'fourth' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>5</Text>
              <RadioButton
              value="fifth"
              status={ messageclarityvalue === 'fifth' ? 'checked' : 'unchecked' }
              />
            </View>
          </View>
        </RadioButton.Group>

        <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 20, marginBottom: 10, fontFamily: 'Garamond'}}>
          Mechanics
        </Text> 
        <RadioButton.Group onValueChange={newValue => setmechanicsValue(newValue)} mechanicsvalue={value}>
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <View>
              <Text>1</Text>
              <RadioButton
              value="first"
              status={ mechanicsvalue === 'first' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>2</Text>
              <RadioButton
              value="second"
              status={ mechanicsvalue === 'second' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>3</Text>
              <RadioButton
              value="third"
              status={ mechanicsvalue === 'third' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>4</Text>
              <RadioButton
              value="fourth"
              status={ mechanicsvalue === 'fourth' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>5</Text>
              <RadioButton
              value="fifth"
              status={ mechanicsvalue === 'fifth' ? 'checked' : 'unchecked' }
              />
            </View>
          </View>
        </RadioButton.Group>

        <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 20, marginBottom: 10, fontFamily: 'Garamond'}}>
          Comments on Written Document
        </Text> 
        <RadioButton.Group onValueChange={newValue => setdocumentcommentValue(newValue)} documentcommentvalue={value}>
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <View>
              <Text>1</Text>
              <RadioButton
              value="first"
              status={ documentcommentvalue === 'first' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>2</Text>
              <RadioButton
              value="second"
              status={ documentcommentvalue === 'second' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>3</Text>
              <RadioButton
              value="third"
              status={ documentcommentvalue === 'third' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>4</Text>
              <RadioButton
              value="fourth"
              status={ documentcommentvalue === 'fourth' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>5</Text>
              <RadioButton
              value="fifth"
              status={ documentcommentvalue === 'fifth' ? 'checked' : 'unchecked' }
              />
            </View>
          </View>
        </RadioButton.Group>

        <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 20, marginBottom: 10, fontFamily: 'Garamond'}}>
          Suitability for Presentation
        </Text> 
        <RadioButton.Group onValueChange={newValue => setsuitabiltyValue(newValue)} suitabiltyvalue={value}>
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <View>
              <Text>1</Text>
              <RadioButton
              value="first"
              status={ suitabiltyvalue === 'first' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>2</Text>
              <RadioButton
              value="second"
              status={ suitabiltyvalue === 'second' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>3</Text>
              <RadioButton
              value="third"
              status={ suitabiltyvalue === 'third' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>4</Text>
              <RadioButton
              value="fourth"
              status={ suitabiltyvalue === 'fourth' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>5</Text>
              <RadioButton
              value="fifth"
              status={ suitabiltyvalue === 'fifth' ? 'checked' : 'unchecked' }
              />
            </View>
          </View>
        </RadioButton.Group>

        <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 20, marginBottom: 10, fontFamily: 'Garamond'}}>
          Potential Interest for Topic
        </Text> 
        <RadioButton.Group onValueChange={newValue => setpotentialinterestValue(newValue)} potentialinterestvalue={value}>
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <View>
              <Text>1</Text>
              <RadioButton
              value="first"
              status={ potentialinterestvalue === 'first' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>2</Text>
              <RadioButton
              value="second"
              status={ potentialinterestvalue === 'second' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>3</Text>
              <RadioButton
              value="third"
              status={ potentialinterestvalue === 'third' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>4</Text>
              <RadioButton
              value="fourth"
              status={ potentialinterestvalue === 'fourth' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>5</Text>
              <RadioButton
              value="fifth"
              status={ potentialinterestvalue === 'fifth' ? 'checked' : 'unchecked' }
              />
            </View>
          </View>
        </RadioButton.Group>

        <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 20, marginBottom: 10, fontFamily: 'Garamond'}}>
          Comments on Potential for Oral Presentation
        </Text> 
        <RadioButton.Group onValueChange={newValue => setpotentialoralValue(newValue)} potentialoralvalue={value}>
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <View>
              <Text>1</Text>
              <RadioButton
              value="first"
              status={ potentialoralvalue === 'first' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>2</Text>
              <RadioButton
              value="second"
              status={ potentialoralvalue === 'second' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>3</Text>
              <RadioButton
              value="third"
              status={ potentialoralvalue === 'third' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>4</Text>
              <RadioButton
              value="fourth"
              status={ potentialoralvalue === 'fourth' ? 'checked' : 'unchecked' }
              />
            </View>
            <View>
              <Text>5</Text>
              <RadioButton
              value="fifth"
              status={ potentialoralvalue === 'fifth' ? 'checked' : 'unchecked' }
              />
            </View>
          </View>
        </RadioButton.Group>
        
      </ScrollView>
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