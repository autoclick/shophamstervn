// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient, gql } from 'graphql-request';
import { ImageResponse } from '@vercel/og';
import { Image } from 'next/image';

const endpoint = process.env.GRAPHQL_ENDPOINT as string;
const graphQLClient = new GraphQLClient(endpoint);

const query = gql`
		{
			post(id: "/20-buc-anh-cuc-hai-huoc/", idType: URI) {
				id
				content
			}
		}
	`;

export default async function handler() {
  const data = await graphQLClient.request(query);
  if (!data.post) {
    return new ImageResponse(<>{'Not found photos'} </>, {
      width: 1200,
      height: 1200,
    });
  } else {
    let _return_array = data.post.content.match(/(https?:\/\/\S+(?:png|jpe?g|gif))/);
    const shuffle = (array: Array<string>) => {
      let currentIndex = array.length, randomIndex;

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
      return new ImageResponse(<>{'Not found photos'} </>, {
        width: 1200,
        height: 1200,
      });
    }
    else {
      let _index_row = 0, _objectFit_array = ["cover", "cover", "cover", "cover", "cover"];
      if (_return_array.length < 6) {
        for (let i = 0; i < 5; i++) {
          if (_return_array[i]) {
            _objectFit_array[i] = "cover";
          } else {
            _return_array[i] = _return_array[_index_row];
            _index_row++;
            _objectFit_array[i] = "contain";
          }
        }
      } else {
        _return_array = _return_array.shift();
      }
      _return_array = shuffle(_return_array);
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
              style={
                {
                  display: 'flex',
                  flexDirection: 'row',
                }}
            >
              <Image style={{ right: 5, bottom: 5, objectFit: '${_objectFit_array[0]}' }}
                alt="avatar"
                width="600"
                height="800"
                src="${_return_array[0]}"
              /> <Image style={{ bottom: 5, objectFit: '${_objectFit_array[1]}' }}
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
              <Image style={{ right: 10, objectFit: '${_objectFit_array[2]}' }}
                alt="avatar"
                width="400"
                height="400"
                src="${_return_array[2]}"
              />
              <Image style={{ right: 5, objectFit: '${_objectFit_array[3]}' }}
                alt="avatar"
                width="400"
                height="400"
                src="${_return_array[3]}"
              />
            </div>
            <div style={
              {
                display: 'flex'
              }}>
              <Image style={{ objectFit: '${_objectFit_array[4]}' }}
                alt="avatar"
                width="400"
                height="400"
                src="${_return_array[4]}"
              />
              <div style={{ display: 'flex', position: 'absolute', alignItems: 'center', justifyContent: 'center', top: '0', left: '0', right: '0', bottom: '0', }}>
                <span style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'black', opacity: '0.4', }}> </span>
                <span> +6 </span>
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
  }
};