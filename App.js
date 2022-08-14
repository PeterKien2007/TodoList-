import React, { useState } from 'react';
import { StyleSheet, Alert , Text, View , ScrollView } from 'react-native';


import Task from './components/Task';
import Form from './components/Form';

export default function App() {
  const handleDeleteTask = (index) => {
    Alert.alert(
      "Khẩn cấp",
      "Xoá nhá",
      [
        {
          text: "OK",
          onPress: () => {
            let taskListTmp = [...taskList];
            taskListTmp.splice(index,1);
            setTaskList(taskListTmp); 
          }
        },
        { text: "Cancel", onPress: () => {} } 
      ]
    );
  }
  const [taskList,setTaskList] = useState([])
  const handleAddTask = (task) => {
    //Add task
    setTaskList([...taskList,task]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Danh sách những việc cần làm</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item,index) => {
              return <Task  key={index} title={item} number={index+1} onDeleteTask={() => handleDeleteTask(index)}/>
            })
          }
       </ScrollView>  
      </View> 
        <Form onAddTask={handleAddTask}/>
     </View>  
  );
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#eff7f8'
    
  },
  body : {
    flex : 1,
    paddingTop : 100,
    paddingHorizontal : 20
  },
  header : {
    fontSize : 25,
    color : '#21a3d0',
    fontWeight : 'bold'
  },
  items : {
    marginTop : 25
  }
  
  
});
