import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

export default function Info() {
	return (
		<RootContainer>
			<HeaderContainer>
				<HeaderImage source={require('../../../assets/banner.png')} />
				<TitleContainer>
					<Title>React Native</Title>
					<SubTitle>
						React Native is an open-source mobile application framework created by Facebook. It is used to
						develop applications for Android, iOS, Web and UWP by enabling developers to use React along
						with native platform capabilities.
					</SubTitle>
				</TitleContainer>
			</HeaderContainer>
			<SectionContainer>
				<OverflownImage source={require('../../../assets/react.png')} />
				<Content>
					In 2012 Mark Zuckerberg commented, "The biggest mistake we made as a company was betting too much on
					HTML as opposed to native". He promised that Facebook would soon deliver a better mobile experience.
					Inside Facebook, Jordan Walke found a way to generate UI elements for iOS from a background
					JavaScript thread. They decided to organise an internal Hackathon to perfect this prototype in order
					to be able to build native apps with this technology.
				</Content>
			</SectionContainer>
			<SectionContainer>
				<Content>
					React Native combines the best parts of native development with React, a best-in-class JavaScript
					library for building user interfaces. Use a little—or a lot. You can use React Native today in your
					existing Android and iOS projects or you can create a whole new app from scratch.
				</Content>
				<OverflownImage source={require('../../../assets/react.png')} />
			</SectionContainer>
		</RootContainer>
	);
}

const TitleContainer = styled.View`padding: 15px;`;

const RootContainer = styled.ScrollView`
	padding: 0;
	background-color: #222831;
`;

const Title = styled.Text`
	font-size: 22px;
	font-weight: bold;
	color: #fff;
`;

const SubTitle = styled.Text`
	font-size: 15px;
	color: #fff;
`;

const HeaderContainer = styled.View`justify-content: center;`;

const HeaderImage = styled.Image`
	width: 100%;
	height: 200px;
`;

const SectionImage = styled.Image`
	width: 100%;
	height: 200px;
	margin-vertical: 15px;
`;

const SectionContainer = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding-horizontal: 15px;
`;

const Content = styled.Text`
	color: #fff;
	flex: 1;
	flex-wrap: wrap;
	padding: 10px;
`;

const OverflownImage = styled.Image`
	border-radius: 100px;
	margin-horizontal: 5px;
	width: 150px;
	height: 150px;
`;
