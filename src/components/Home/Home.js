import React from 'react';
import PropTypes from 'prop-types';
import utils from '../../utils';
import {
  VideoSection,
  Columns,
  Card,
  Cover,
  Info,
  Title,
  Details,
  ChannelTitle,
  DateSince
} from './Home.styled';

const vide = [
  {
    kind: 'youtube#searchResult',
    etag: 'anPFeWWewVB_LAobZCPycVDGypg',
    id: {
      kind: 'youtube#video',
      videoId: 'h9Q4zZS2v1k'
    },
    snippet: {
      publishedAt: '2021-04-22T13:00:12Z',
      channelId: 'UCjmJDM5pRKbUlVIzDYYWb6g',
      title: 'THE CONJURING: THE DEVIL MADE ME DO IT – Official Trailer',
      description:
        'True horror returns. Based on the case files of Ed and Lorraine Warren. #TheConjuring: The Devil Made Me Do It, in theaters and HBO Max June 4.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/h9Q4zZS2v1k/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/h9Q4zZS2v1k/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/h9Q4zZS2v1k/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Warner Bros. Pictures',
      liveBroadcastContent: 'none',
      publishTime: '2021-04-22T13:00:12Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'D2wisDzW_wssOWGCEJqqfV8r63o',
    id: {
      kind: 'youtube#video',
      videoId: 'uUR_yfP9RkI'
    },
    snippet: {
      publishedAt: '2021-04-22T13:00:07Z',
      channelId: 'UCbD8EppRX3ZwJSou-TVo90A',
      title: '[풀버전] ♬ 오솔레미오 (The Red Wedding) - 더보이즈(THE BOYZ)',
      description:
        '[풀버전] ♬ 오솔레미오 (The Red Wedding) - 더보이즈(THE BOYZ) 전설이 되어라, WHO IS THE KING? ＜킹덤(KINGDOM : LEGENDARY WAR)＞ 매주 (목) 저녁 7 ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/uUR_yfP9RkI/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/uUR_yfP9RkI/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/uUR_yfP9RkI/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Mnet K-POP',
      liveBroadcastContent: 'none',
      publishTime: '2021-04-22T13:00:07Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'int2GOHJxiZmQMSGFfORtoG3H8o',
    id: {
      kind: 'youtube#video',
      videoId: 'YsS87p-HqhM'
    },
    snippet: {
      publishedAt: '2021-04-24T05:19:53Z',
      channelId: 'UCvgfXK4nTYKudb0rFR6noLA',
      title: 'UFC 261 Embedded: Vlog Series - Episode 6',
      description:
        'Foes Jorge Masvidal and Kamaru Usman cut weight in very different ways. Francis Ngannou lightens the mood. Valentina Shevchenko has an easy cut, and the ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/YsS87p-HqhM/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/YsS87p-HqhM/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/YsS87p-HqhM/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'UFC - Ultimate Fighting Championship',
      liveBroadcastContent: 'none',
      publishTime: '2021-04-24T05:19:53Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'nzuIWZa1uVkoBTewAacHBki5Xbw',
    id: {
      kind: 'youtube#video',
      videoId: '_Is8EOl18qk'
    },
    snippet: {
      publishedAt: '2021-04-22T19:00:18Z',
      channelId: 'UCbReH8gzVeGr6wuQHEOiHFA',
      title:
        '『バイオハザード　ヴィレッジ』公式イメージソング「俺らこんな村いやだLv.100」',
      description:
        '『バイオハザードヴィレッジ』の舞台が辺境の“閑村”であることにかけて、 作詞・作曲とも吉幾三が手掛けた「俺ら東京さ行ぐだ」をスペシャルアレンジ！ あの有名なメロディに ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/_Is8EOl18qk/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/_Is8EOl18qk/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/_Is8EOl18qk/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'biohazard',
      liveBroadcastContent: 'none',
      publishTime: '2021-04-22T19:00:18Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'w9p64V8z4b_cT1qbou_64vLd1r8',
    id: {
      kind: 'youtube#video',
      videoId: 'L9vgicgfF5Q'
    },
    snippet: {
      publishedAt: '2021-04-22T11:30:14Z',
      channelId: 'UCLbdVvreihwZRL6kwuEUYsA',
      title:
        'LIFT | Inna Mylu Lyric Video | Sivakarthikeyan | Kavin | Amritha | Vineeth | Britto Michael | Hepzi',
      description:
        'Lift | #LIFTFirstSingle | #InnaMylu Lyric Video Song | #Sivakarthikeyan, #Poovaiyar, #KamalaKannan, #Rajesh | #Kavin | #Amritha | #VineethVaraprasad ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/L9vgicgfF5Q/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/L9vgicgfF5Q/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/L9vgicgfF5Q/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Think Music India',
      liveBroadcastContent: 'none',
      publishTime: '2021-04-22T11:30:14Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'ztNd6KuJsSQy3OJ0s1MEwZHnnnI',
    id: {
      kind: 'youtube#video',
      videoId: 'uNLP33BY7pk'
    },
    snippet: {
      publishedAt: '2021-04-24T13:18:40Z',
      channelId: 'UChDKyKQ59fYz3JO2fl0Z6sg',
      title:
        'Missing Indonesian Submarine: Debris Found As Hope For Survivors Dwindles | TODAY',
      description:
        'The search for survivors of a missing submarine off the coast of Bali is turning hopeless as officials say the crew has likely run out of oxygen. The Indonesian ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/uNLP33BY7pk/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/uNLP33BY7pk/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/uNLP33BY7pk/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'TODAY',
      liveBroadcastContent: 'none',
      publishTime: '2021-04-24T13:18:40Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'flZ6b7R6Imm3p-41yrqw2Xld2P4',
    id: {
      kind: 'youtube#video',
      videoId: 'anDtrp34xig'
    },
    snippet: {
      publishedAt: '2021-04-22T13:00:01Z',
      channelId: 'UCEOVI4AmQE01FDKNFunkV2w',
      title: 'INVOCAÇÃO DO MAL 3: A ORDEM DO DEMÔNIO - Trailer Oficial',
      description:
        'O verdadeiro horror retorna. Baseado em casos reais de Ed e Lorraine Warren. #InvocaçãoDoMal3: A Ordem do Demônio, breve nos cinemas. Invocação do ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/anDtrp34xig/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/anDtrp34xig/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/anDtrp34xig/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Warner Bros. Pictures Brasil',
      liveBroadcastContent: 'none',
      publishTime: '2021-04-22T13:00:01Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '-q_6fWh2r2Q_JPZ71iUWnpueZc4',
    id: {
      kind: 'youtube#video',
      videoId: 'VdBUlTD08C8'
    },
    snippet: {
      publishedAt: '2021-04-22T22:00:10Z',
      channelId: 'UCZaF5bLUS5XRsXDCnH8jFeg',
      title: 'Lenny Tavárez, Zion &amp; Lennox - Me Enamora (Official Video)',
      description:
        'Follow me instagram @LennyTavarez facebook.com/LennyTavarezTM twitter @LennyTavarezTM.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/VdBUlTD08C8/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/VdBUlTD08C8/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/VdBUlTD08C8/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Lenny Tavarez',
      liveBroadcastContent: 'none',
      publishTime: '2021-04-22T22:00:10Z'
    }
  }
];
function Home({ isDarkMode, popularVideos }) {
  return (
    <VideoSection isDarkMode={isDarkMode}>
      <Columns>
        {vide.map((video) => {
          const id = video.id.videoId;
          const thumbnail = video.snippet.thumbnails.default;
          const title = video.snippet.title;
          const channelTitle = video.snippet.channelTitle;
          const datePublished = video.snippet.publishedAt;
          return (
            <Card key={id} isDarkMode={isDarkMode}>
              <Cover>
                <img src={thumbnail.url} />
              </Cover>
              <Info isDarkMode={isDarkMode}>
                <Title isDarkMode={isDarkMode}>{title}</Title>
                <Details isDarkMode={isDarkMode}>
                  <ChannelTitle isDarkMode={isDarkMode}>
                    {channelTitle}{' '}
                    <span className="material-icons">verified</span>
                  </ChannelTitle>
                  <DateSince isDarkMode={isDarkMode}>
                    {utils.getDateDiff(datePublished)}
                  </DateSince>
                </Details>
              </Info>
            </Card>
          );
        })}
      </Columns>
    </VideoSection>
  );
}

Home.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  popularVideos: PropTypes.array
};

Home.defaultProps = {
  popularVideos: []
};

export default Home;
