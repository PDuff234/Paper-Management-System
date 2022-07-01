import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const TestReviewer = () => {
  const [checked, setChecked] = React.useState('');

  return (
    <View style={{ flexDirection: 'row', alignContent: 'center' }}>
      <View>
        <Text>1</Text>
        <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        />
      </View>
      <View>
        <Text>2</Text>
        <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
        />
      </View>
      <View>
        <Text>3</Text>
        <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
        />
      </View>
      <View>
        <Text>4</Text>
        <RadioButton
        value="fourth"
        status={ checked === 'fourth' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('fourth')}
        />
      </View>
      <View>
        <Text>5</Text>
        <RadioButton
        value="fifth"
        status={ checked === 'fifth' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('fifth')}
        />
      </View>
    </View>
  );
};

export default TestReviewer;