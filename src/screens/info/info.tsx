import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

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

const TitleContainer = styled.View`padding: 15px;`;

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
					Polo was born in 1254, in Venice, Italy. Although he was born to a wealthy Venetian merchant family,
					much of Polo’s childhood was spent parentless, and he was raised by an extended family. Polo's
					mother died when he was young, and his father and uncle, successful jewel merchants Niccolo and
					Maffeo Polo, were in Asia for much of Polo's youth.
				</Content>
				<OverflownImage source={require('../../../assets/react.png')} />
			</SectionContainer>
		</RootContainer>
	);
}
