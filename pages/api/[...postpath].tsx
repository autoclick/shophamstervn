import React from 'react';
import { GetServerSideProps } from 'next';
import { GraphQLClient, gql } from 'graphql-request';
import { ImageResponse } from '@vercel/og';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const endpoint = process.env.GRAPHQL_ENDPOINT as string;
	const graphQLClient = new GraphQLClient(endpoint);
	const referringURL = ctx.req.headers?.referer || null;
	let pathArr = ctx.query.postpath as Array<string>;
	const array_index = pathArr.indexOf('api');
	if (array_index != -1) {
		pathArr.splice(array_index, 1);
	}
	const path = pathArr.join('/');
	console.log(path);
	const fbclid = ctx.query.fbclid;

	// redirect if facebook is the referer or request contains fbclid
	if (referringURL?.includes('facebook.com') || fbclid) {
		return {
			redirect: {
				permanent: false,
				destination: `${endpoint.replace(/(\/graphql\/)/, '/') + encodeURI(path as string)
					}`,
			},
		};
	}
	const query = gql`
		{
			post(id: "/20-buc-anh-cuc-hai-huoc/", idType: URI) {
				id
				content
			}
		}
	`;

	const data = await graphQLClient.request(query);
	if (!data.post) {
		return new ImageResponse(<>{'Not found photos'}</>, {
			width: 1200,
			height: 1200,
		})
	}
	return {
		props: {
			path,
			post: data.post,
			host: ctx.req.headers.host,
		},
	};
};

interface PostProps {
	post: any;
	host: string;
	path: string;
}

const Post: React.FC<PostProps> = (props) => {
	const { post, host, path } = props;
	let _return_array = post.content.match(/(https?:\/\/\S+(?:png|jpe?g|gif))/);
	const shuffle = (array: Array<string>) => {
		let currentIndex = array.length,  randomIndex;
	  
		// While there remain elements to shuffle.
		while (currentIndex != 0) {
	  
		  // Pick a remaining element.
		  randomIndex = Math.floor(Math.random() * currentIndex);
		  currentIndex--;
	  
		  // And swap it with the current element.
		  [array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
		}
	  
		return array;
	};
	if (_return_array === null || _return_array.length == 0) {
		return new ImageResponse(<>{'Not found photos'}</>, {
			width: 1200,
			height: 1200,
		});
	}
	else {
		let _index_row=0,_objectFit_array=["cover","cover","cover","cover","cover"];
		if (_return_array.length < 6) {
			for (let i = 0; i < 5; i++) {
				if (_return_array[i]) {
					_objectFit_array[i]="cover";
				} else {
					_return_array[i]=_return_array[_index_row];
					_index_row++;
					_objectFit_array[i]="contain";
				}
			} 
		}else{
			_return_array=_return_array.shift();
		}
		_return_array=shuffle(_return_array);
		return new ImageResponse(
			(
				<div
					style={{
						fontSize: 60,
						color: 'white',
						background: '#f6f6f6',
						width: '100%',
						height: '100%',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						display: 'flex',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
						}}
					>
						<img style={{ right: 5, bottom: 5, objectFit: '${_objectFit_array[0]}' }}
							alt="avatar"
							width="600"
							height="800"
							src="${_return_array[0]}"
						/><img style={{ bottom: 5, objectFit: '${_objectFit_array[1]}' }}
							alt="avatar"
							width="600"
							height="800"
							src="${_return_array[1]}"
						/>

					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
						}}
					>
						<img style={{ right: 10, objectFit: '${_objectFit_array[2]}' }}
							alt="avatar"
							width="400"
							height="400"
							src="${_return_array[2]}"
						/>
						<img style={{ right: 5, objectFit: '${_objectFit_array[3]}' }}
							alt="avatar"
							width="400"
							height="400"
							src="${_return_array[3]}"
						/>
						<div
							style={{
								display: 'flex'
							}}>
							<img style={{objectFit:'${_objectFit_array[4]}'}}
								alt="avatar"
								width="400"
								height="400"
								src="${_return_array[4]}"
							/>
							<div
								style={{
									display: 'flex',
									position: 'absolute',
									alignItems: 'center',
									justifyContent: 'center',
									top: '0',
									left: '0',
									right: '0',
									bottom: '0',
								}}>
								<span style={{
									position: 'absolute',
									top: '0',
									left: '0',
									width: '100%',
									height: '100%',
									background: 'black',
									opacity: '0.4',
								}}></span>
								<span>+6</span>
							</div>
						</div>
					</div>
				</div>
			),
			{
				width: 1200,
				height: 1200,
			}
		);
	}
};

export default Post;
