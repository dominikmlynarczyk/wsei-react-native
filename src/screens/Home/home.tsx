import React from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.ScrollView`background-color: #222831;`;

const IntroContainer = styled.View`
	align-items: center;
	padding: 30px 0;
	background-color: #3f3f44;
`;

const WelcomeText = styled.Text`
	padding: 15px 0;
	font-size: 20px;
	color: #fff;
`;

const AuthorImage = styled.Image`
	border-radius: 100px;
	width: 150px;
	height: 150px;
`;

const ContentContainer = styled.View``;

const Content = styled.Text`
	padding: 30px 40px;
	color: #fff;
`;

export default function HomeScreen() {
	return (
		<Container>
			<IntroContainer>
				<WelcomeText>WSEI Todo</WelcomeText>
				<AuthorImage source={require('../../../assets/author.jpg')} />
				<WelcomeText>Dominik Młynarczyk</WelcomeText>
			</IntroContainer>
			<ContentContainer>
				<Content>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Sed risus
					pretium quam vulputate dignissim. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Morbi
					tincidunt augue interdum velit euismod. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus
					iaculis. Massa eget egestas purus viverra. Amet tellus cras adipiscing enim eu turpis egestas.
					Elementum pulvinar etiam non quam lacus suspendisse faucibus. Ullamcorper malesuada proin libero
					nunc consequat interdum. Lacus vel facilisis volutpat est velit. Amet porttitor eget dolor morbi non
					arcu. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Eu mi bibendum neque
					egestas congue quisque egestas diam. Non tellus orci ac auctor augue mauris. Enim neque volutpat ac
					tincidunt. Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. Et sollicitudin ac orci
					phasellus egestas. In vitae turpis massa sed elementum tempus egestas sed. Sed faucibus turpis in eu
					mi bibendum. Semper eget duis at tellus at urna. Fusce ut placerat orci nulla pellentesque dignissim
					enim sit amet. Mauris vitae ultricies leo integer malesuada. Sed sed risus pretium quam vulputate
					dignissim suspendisse in. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis.
					Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Tristique et egestas quis
					ipsum suspendisse ultrices gravida dictum. In mollis nunc sed id semper risus in hendrerit. Ut
					venenatis tellus in metus vulputate eu scelerisque felis. Adipiscing vitae proin sagittis nisl
					rhoncus mattis rhoncus urna. Nulla at volutpat diam ut venenatis tellus. Nunc sed augue lacus
					viverra vitae congue. Nisl suscipit adipiscing bibendum est ultricies. Tempor commodo ullamcorper a
					lacus. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Turpis cursus in hac
					habitasse platea. Hendrerit gravida rutrum quisque non tellus orci ac. Neque gravida in fermentum et
					sollicitudin ac orci. Massa placerat duis ultricies lacus sed turpis. Mus mauris vitae ultricies leo
					integer. Ut venenatis tellus in metus vulputate eu. Dui faucibus in ornare quam viverra. Leo vel
					fringilla est ullamcorper eget nulla facilisi. Faucibus purus in massa tempor nec feugiat. Urna nec
					tincidunt praesent semper. Ullamcorper dignissim cras tincidunt lobortis. Morbi non arcu risus quis
					varius quam quisque id diam. Porttitor eget dolor morbi non arcu. Tellus at urna condimentum mattis
					pellentesque id nibh tortor id. Arcu risus quis varius quam quisque id diam vel quam. Enim sed
					faucibus turpis in eu mi bibendum neque. Interdum velit euismod in pellentesque massa placerat duis
					ultricies lacus. Etiam sit amet nisl purus. Pellentesque eu tincidunt tortor aliquam nulla facilisi.
					Scelerisque fermentum dui faucibus in. Egestas dui id ornare arcu odio ut. Scelerisque varius morbi
					enim nunc faucibus a. Consequat ac felis donec et. Sagittis vitae et leo duis ut diam quam nulla
					porttitor. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Lobortis elementum nibh
					tellus molestie nunc non blandit massa. Dictumst quisque sagittis purus sit amet volutpat consequat
					mauris nunc. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Viverra ipsum nunc
					aliquet bibendum enim facilisis gravida. Diam sit amet nisl suscipit. Faucibus scelerisque eleifend
					donec pretium. In tellus integer feugiat scelerisque varius. Quam id leo in vitae turpis massa. Id
					leo in vitae turpis massa. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Leo in
					vitae turpis massa sed elementum tempus. Habitant morbi tristique senectus et netus. Diam vel quam
					elementum pulvinar etiam non quam lacus. Enim facilisis gravida neque convallis a cras semper.
					Suspendisse potenti nullam ac tortor vitae. Ullamcorper malesuada proin libero nunc consequat.
				</Content>
			</ContentContainer>
		</Container>
	);
}
