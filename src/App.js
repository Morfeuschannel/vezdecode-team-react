import './App.css';
import React, { useState, useEffect } from 'react';
import { View, ScreenSpinner, ConfigProvider, AdaptivityProvider, AppRoot, Panel, PanelHeader, SimpleCell, Header, Text, Group, CardGrid, CardScroll, Card, Avatar, Div } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import ivan from './img/ivan.jpg';
import katya from './img/katya.jpg';
import nastya from './img/nastya.jpg';
import niyaz from './img/niyaz.jpg';


function App() {

  useEffect(() => {
		const schemeAttribute = document.createAttribute('scheme');
		schemeAttribute.value = 'bright_light';

	}, []);

  return (
    <ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<View>
						
            <Panel>
              <PanelHeader>
                <Header subtitle="Команда Вездекода 2021">«Без булдырабыз»</Header>
              </PanelHeader>
              <Group>

                <CardGrid size="l" >
                  <Card mode="outline">
                    <SimpleCell
                      description="22 года"
                      before={<Avatar src={ivan}/>}
                      href="https://vk.com/ivstepin"
                    >
                      Иван Степин
                    </SimpleCell>
                    <Div>
                      <Text>Бывший дизайнер. 1,5 года занимается веб-разработкой, пишет музыку, ищет тяночку и готовит борщи.</Text>
                    </Div>
                  </Card>

                  <Card mode="outline">
                    <SimpleCell
                      description="18 лет"
                      before={<Avatar src={katya}/>}
                      href="https://vk.com/wish_nya1"
                    >
                      Анастасия Лаврова
                    </SimpleCell>
                    <Div>
                      <Text>Настоящий дизайнер. Создаёт интерфейсы, однажды нарисовала кнопку в виде чак-чака, любит спать.</Text>
                    </Div>
                  </Card>

                  <Card mode="outline">
                    <SimpleCell
                      description="29 лет"
                      before={<Avatar src={nastya}/>}
                      href="https://vk.com/one_step_cl0ser"
                    >
                      Екатерина Козлова
                    </SimpleCell>
                    <Div>
                      <Text>Frontend-разработчик. Написала свой первый сайт в блокноте. Теперь может вызвать дьявола через WebStorm.</Text>
                    </Div>
                  </Card>

                  <Card mode="outline">
                    <SimpleCell
                      description="18 лет"
                      before={<Avatar src={niyaz}/>}
                      href="https://vk.com/lniaz"
                    >
                      Нияз Леушкин
                    </SimpleCell>
                    <Div>
                      <Text>Прогает на си, java и c#. Любит собак и котиков. Заставил микроволновку думать, что она метеостанция.</Text>
                    </Div>
                  </Card>

                </CardGrid>

              </Group>
            </Panel>

					</View>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
  );
}

export default App;
