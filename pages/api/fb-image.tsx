// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient, gql } from 'graphql-request';
import { ImageResponse } from '@vercel/og';
export const config = {
  runtime: 'edge',
}
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
    let srcArray = data.post.content.match(/(https?:\/\/\S+(?:png|jpe?g|gif))/);
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
    if (srcArray === null || srcArray.length == 0) {
      return new ImageResponse(<>{'Not found photos'} </>, {
        width: 1200,
        height: 1200,
      });
    }
    else {
      let _index_row = 0;
      let objectFitArray = ["right: 5, bottom: 5, objectFit: 'cover'", "bottom: 5, objectFit: 'cover'", "right: 10, objectFit: 'cover'", "right: 5, objectFit: 'cover'", "objectFit: 'cover'"];
      if (srcArray.length < 6) {
        for (let i = 0; i < 5; i++) {
          if (!srcArray[i]) {
            srcArray[i] = srcArray[_index_row];
            _index_row++;
            objectFitArray[i] = objectFitArray[i].replace("cover", "contain");
          }
        }
      } else {
        srcArray = srcArray.shift();
      }
      srcArray = shuffle(srcArray);
      const srcCount=srcArray.length;
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
              <img style={{objectFitArray[0]}}
                alt="avatar"
                width="600"
                height="800"
                src={srcArray[0]}
              /> <img style={{objectFitArray[1]}}
                alt="avatar"
                width="600"
                height="800"
                src={srcArray[1]}
              />

            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <img style={{objectFitArray[2]}}
                alt="avatar"
                width="400"
                height="400"
                src={srcArray[2]}
              />
              <img style={{objectFitArray[3]}}
                alt="avatar"
                width="400"
                height="400"
                src={srcArray[3]}
              />
            </div>
            <div style={
              {
                display: 'flex'
              }}>
              <img style={{objectFitArray[4]}}
                alt="avatar"
                width="400"
                height="400"
                src={srcArray[4]}
              />
              <div style={{ display: 'flex', position: 'absolute', alignItems: 'center', justifyContent: 'center', top: '0', left: '0', right: '0', bottom: '0', }}>
                <span style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'black', opacity: '0.4', }}> </span>
                <span> +{srcCount} </span>
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