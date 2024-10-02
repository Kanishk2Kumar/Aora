import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import {React, useState} from 'react'
import { icons } from "../constants";

const FormField = ({title,value,placeholder,handleChangeText,otherStyles, ...props
}) => {  
  const [showPassword, setshowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`} >
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="text-base border-2 border-white w-full h-14 bg-black-100
       rounded-2xl focus:border-secondary items-center flex-row">
      <TextInput
          className="flex-1 text-white font-psemibold text-base ml-2"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === 'Password' && (
            <TouchableOpacity onPress={() =>
            setshowPassword(!showPassword)}>
                <Image source={!showPassword ? icons.eye : icons.eyeHide} 
                className="w-7 h-7 mr-2" resizeMethod='contain'
                />
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField