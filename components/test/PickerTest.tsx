import * as React from 'react';

import { useColorScheme } from '~/lib/useColorScheme';
import { Picker, PickerItem } from '~/components/nativewindui/Picker';

export default function PickerExample() {
  const { colors } = useColorScheme();
  const [picker, setPicker] = React.useState('blue');
  return (
    <Picker selectedValue={picker} onValueChange={(itemValue) => setPicker(itemValue)}>
      <PickerItem
        label="Red"
        value="red"
        color={colors.foreground}
        style={{
          backgroundColor: colors.root,
        }}
      />
      <PickerItem
        label="Blue"
        value="blue"
        color={colors.foreground}
        style={{
          backgroundColor: colors.root,
        }}
      />
      <PickerItem
        label="Green"
        value="green"
        color={colors.foreground}
        style={{
          backgroundColor: colors.root,
        }}
      />
    </Picker>
  );
}