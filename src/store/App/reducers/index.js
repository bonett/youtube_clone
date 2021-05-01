import { combineReducers } from 'redux';
import at from '../types';

const resultAPI = {
  _type: 'Videos',
  instrumentation: {
    _type: 'ResponseInstrumentation'
  },
  readLink: 'https://api.cognitive.microsoft.com/api/v7/videos/search?q=apple',
  webSearchUrl: 'https://www.bing.com/videos/search?q=apple',
  queryContext: {
    originalQuery: 'apple',
    alterationDisplayQuery: 'apple',
    alterationOverrideQuery: '+apple',
    alterationMethod: 'AM_JustChangeIt',
    alterationType: 'CombinedAlterationsChained'
  },
  totalEstimatedMatches: 951,
  value: [
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=25651CD424DD54B4F5CF25651CD424DD54B4F5CF',
      name: 'New Apple products are available for preorder',
      description:
        "In today's top stories, Google Assistant wants to get better at pronouncing unique names, the Uber app can help you schedule (and get to) your COVID vaccination and new Apple products are available for preorder.",
      thumbnailUrl:
        'https://tse3.mm.bing.net/th?id=OVF.ZnvFC3sXuPAE7md%2bk%2fOSow&pid=Api',
      datePublished: '2021-05-01T11:00:14.0000000',
      publisher: [
        {
          name: 'Microsoft News'
        }
      ],
      creator: {
        name: 'CNET'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://www.msn.com/en-us/movies/story/new-apple-products-are-available-for-preorder/vp-BB1gfCGO',
      hostPageUrl:
        'https://www.msn.com/en-us/movies/story/new-apple-products-are-available-for-preorder/vp-BB1gfCGO',
      encodingFormat: 'h264',
      hostPageDisplayUrl:
        'https://www.msn.com/en-us/movies/story/new-apple-products-are-available-for-preorder/vp...',
      width: 960,
      height: 540,
      duration: 'PT1M30S',
      motionThumbnailUrl:
        'https://tse2.mm.bing.net/th?id=OM.z_W0VN0k1BxlJQ&pid=Api',
      embedHtml:
        '<iframe width="1280" height="720" src="https://www.msn.com/en-us/movies/story/new-apple-products-are-available-for-preorder/vp-BB1gfCGO?embed=true&autoplay=true&ocid=bingembedvideo" scrolling ="no" frameborder="0" allowfullscreen></iframe>',
      allowHttpsEmbed: true,
      thumbnail: {
        width: 600,
        height: 337
      },
      videoId: '25651CD424DD54B4F5CF25651CD424DD54B4F5CF',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=FA8F17359308DD1F15E8FA8F17359308DD1F15E8',
      name: 'These Apple stock alternatives look like buys, traders say',
      description:
        "Ahead of Apple earnings, we asked our traders for their favorite stocks benefiting from Apple's halo effect. Matt Maley of Miller Tabak and Delano Saporu of New Street Advisors share their picks.",
      thumbnailUrl:
        'https://tse4.mm.bing.net/th?id=OVF.jpKJ551KZjVtJPSt6sY52w&pid=Api',
      datePublished: '2021-04-28T19:03:14.0000000',
      publisher: [
        {
          name: 'CNBC'
        }
      ],
      creator: {
        name: 'Andrea Miller'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://www.cnbc.com/video/2021/04/28/apple-earnings-stock-alternatives-that-look-like-buys.html',
      hostPageUrl:
        'https://www.cnbc.com/video/2021/04/28/apple-earnings-stock-alternatives-that-look-like-buys.html',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://www.cnbc.com/video/2021/04/28/apple-earnings-stock-alternatives-that-look-like...',
      width: 400,
      height: 225,
      duration: 'PT3M5S',
      embedHtml:
        '<iframe src="https://player.cnbc.com/p/gZWlPC/cnbc_global?playertype=synd&byGuid=7000188461" width="530" height="298" type="application/x-shockwave-flash" allowFullScreen="true" bgcolor="#131313" scrolling="no"></iframe>',
      allowHttpsEmbed: true,
      thumbnail: {
        width: 300,
        height: 168
      },
      videoId: 'FA8F17359308DD1F15E8FA8F17359308DD1F15E8',
      allowMobileEmbed: true,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=269E485AF76AD6AA491E269E485AF76AD6AA491E',
      name: 'Apple unveils new 4K Apple TV with A12 Bionic chip',
      description:
        'The new Apple TV 4K box with a redesigned Siri remote is now available for preorder.',
      thumbnailUrl:
        'https://tse4.mm.bing.net/th?id=OVF.AEbct6qxHhyOEg63r9CXRg&pid=Api',
      datePublished: '2021-04-30T12:00:08.0000000',
      publisher: [
        {
          name: 'CNET'
        }
      ],
      creator: {
        name: 'Eli Blumenthal'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://www.cnet.com/news/apple-tv-4k-all-the-big-upgrades-coming-to-the-new-streaming-box/',
      hostPageUrl:
        'https://www.cnet.com/news/apple-tv-4k-all-the-big-upgrades-coming-to-the-new-streaming-box/',
      encodingFormat: 'h264',
      hostPageDisplayUrl:
        'https://www.cnet.com/news/apple-tv-4k-all-the-big-upgrades-coming-to-the-new-streaming-box',
      width: 640,
      height: 360,
      duration: 'PT4M41S',
      motionThumbnailUrl:
        'https://tse2.mm.bing.net/th?id=OM.Hkmq1mr3WkieJg&pid=Api',
      allowHttpsEmbed: false,
      thumbnail: {
        width: 600,
        height: 337
      },
      videoId: '269E485AF76AD6AA491E269E485AF76AD6AA491E',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=6661BA25B7F09F6870C66661BA25B7F09F6870C6',
      name: 'Apple Has More Room to Grow, Neuberger Analyst Flax Says',
      description:
        "Daniel Flax, Neuberger Berman senior research analyst, discusses the key takeaways from Apple's second-quarter earnings report with Bloomberg's Joe Weisenthal and Caroline Hyde on \"Bloomberg Markets: What'd You Miss?\" (Source: Bloomberg)",
      thumbnailUrl:
        'https://tse2.mm.bing.net/th?id=OVF.MmFQo8%2fzEY4Wqn7lzNCHdw&pid=Api',
      datePublished: '2021-04-28T21:15:10.0000000',
      publisher: [
        {
          name: 'Bloomberg.com'
        }
      ],
      isFamilyFriendly: true,
      contentUrl:
        'https://www.bloomberg.com/news/videos/2021-04-28/apple-has-further-growth-potential-neuberger-analyst-flax-video',
      hostPageUrl:
        'https://www.bloomberg.com/news/videos/2021-04-28/apple-has-further-growth-potential-neuberger-analyst-flax-video',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://www.bloomberg.com/news/videos/2021-04-28/apple-has-further-growth-potential...',
      width: 950,
      height: 534,
      duration: 'PT4M38S',
      embedHtml:
        '<iframe width="720" height="480" src="https://www.bloomberg.com/multimedia/api/embed/iframe?id=nhT2T3KFTy2mfwA_6j724g" allowscriptaccess="always" frameborder="0"></iframe>',
      allowHttpsEmbed: true,
      thumbnail: {
        width: 300,
        height: 168
      },
      videoId: '6661BA25B7F09F6870C66661BA25B7F09F6870C6',
      allowMobileEmbed: true,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=FBB8BAF0633C11038599FBB8BAF0633C11038599',
      name: "Apple Reversal's Upside?",
      description:
        'Apple broke out on Thursday following earnings but quickly reversed lower. Fell some more on Friday. The handle was tiny – no real shakeout. Now has a handle on a weekly chart…',
      thumbnailUrl:
        'https://tse1.mm.bing.net/th?id=OVF.4YVcVbHuKDwQ6gWBfr5bsw&pid=Api',
      datePublished: '2021-04-30T15:35:29.0000000',
      publisher: [
        {
          name: 'Yahoo Finance'
        }
      ],
      isFamilyFriendly: true,
      contentUrl:
        'https://finance.yahoo.com/video/apple-reversals-upside-153529221.html',
      hostPageUrl:
        'https://finance.yahoo.com/video/apple-reversals-upside-153529221.html',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://finance.yahoo.com/video/apple-reversals-upside-153529221.html',
      width: 720,
      height: 406,
      duration: 'PT1M45S',
      allowHttpsEmbed: false,
      thumbnail: {
        width: 300,
        height: 169
      },
      videoId: 'FBB8BAF0633C11038599FBB8BAF0633C11038599',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=5D8B72B7A79451D235665D8B72B7A79451D23566',
      name: 'Apple has a stellar quarter, Google to make Assistant smarter',
      description:
        "In today's top stories, Apple manages to double its profits and sell a record number of Macs. Meanwhile, Google Assistant will gain the ability to pronounce unique names.",
      thumbnailUrl:
        'https://tse2.mm.bing.net/th?id=OVF.EQ7TylS%2fXCZW1tffbFL7Aw&pid=Api',
      datePublished: '2021-04-30T18:00:03.0000000',
      publisher: [
        {
          name: 'Yahoo'
        }
      ],
      creator: {
        name: 'CNET'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://www.yahoo.com/entertainment/apple-stellar-quarter-google-assistant-110003192.html',
      hostPageUrl:
        'https://www.yahoo.com/entertainment/apple-stellar-quarter-google-assistant-110003192.html',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://www.yahoo.com/entertainment/apple-stellar-quarter-google-assistant-110003192.html',
      width: 640,
      height: 360,
      duration: 'PT1M14S',
      allowHttpsEmbed: false,
      thumbnail: {
        width: 300,
        height: 168
      },
      videoId: '5D8B72B7A79451D235665D8B72B7A79451D23566',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=53B64B2E621F5AADA4CF53B64B2E621F5AADA4CF',
      name: 'Why this Apple investor is bullish on its earnings report',
      description:
        'CNBC\'s "Halftime Report" team discusses Apple\'s performance alongside other Big Tech stocks. Apple is set to release its quarterly earnings report after the bell.',
      thumbnailUrl:
        'https://tse1.mm.bing.net/th?id=OVF.iBpSAPY%2bJpPo%2fin%2f9yub8w&pid=Api',
      datePublished: '2021-04-28T16:33:30.0000000',
      publisher: [
        {
          name: 'Microsoft News'
        }
      ],
      creator: {
        name: 'CNBC'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://www.msn.com/en-us/sports/mlb/why-this-apple-investor-is-bullish-on-its-earnings-report/vp-BB1g9oC8',
      hostPageUrl:
        'https://www.msn.com/en-us/sports/mlb/why-this-apple-investor-is-bullish-on-its-earnings-report/vp-BB1g9oC8',
      encodingFormat: 'h264',
      hostPageDisplayUrl:
        'https://www.msn.com/en-us/sports/mlb/why-this-apple-investor-is-bullish-on-its-earnings...',
      width: 640,
      height: 360,
      duration: 'PT5M10S',
      motionThumbnailUrl:
        'https://tse1.mm.bing.net/th?id=OM.z6StWh9iLku2Uw&pid=Api',
      embedHtml:
        '<iframe width="1280" height="720" src="https://www.msn.com/en-us/sports/mlb/why-this-apple-investor-is-bullish-on-its-earnings-report/vp-BB1g9oC8?embed=true&autoplay=true&ocid=bingembedvideo" scrolling ="no" frameborder="0" allowfullscreen></iframe>',
      allowHttpsEmbed: true,
      thumbnail: {
        width: 600,
        height: 337
      },
      videoId: '53B64B2E621F5AADA4CF53B64B2E621F5AADA4CF',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=36DBC5D07A7DDB0E5D9C36DBC5D07A7DDB0E5D9C',
      name: 'Jim Cramer reacts to Goldman admitting it was wrong on Apple',
      description:
        "Apple reported blowout results for its fiscal second quarter on Wednesday, with iPhone sales easily beating expectations and climbing more than 60% year over year. In response, Goldman analyst Rod Hall upgraded the stock to neutral from sell, saying that the strength of the flagship iPhone was undeniable. CNBC's Jim Cramer reacts.",
      thumbnailUrl:
        'https://tse3.mm.bing.net/th?id=OVF.pvnKFw2bGNM2wVKu2SKZUA&pid=Api',
      datePublished: '2021-04-29T14:55:31.0000000',
      publisher: [
        {
          name: 'CNBC'
        }
      ],
      creator: {
        name: 'Ylan Mui'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://www.cnbc.com/video/2021/04/29/jim-cramer-goldman-apple-call-earnings.html',
      hostPageUrl:
        'https://www.cnbc.com/video/2021/04/29/jim-cramer-goldman-apple-call-earnings.html',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://www.cnbc.com/video/2021/04/29/jim-cramer-goldman-apple-call-earnings.html',
      width: 400,
      height: 225,
      duration: 'PT2M55S',
      embedHtml:
        '<iframe src="https://player.cnbc.com/p/gZWlPC/cnbc_global?playertype=synd&byGuid=7000188679" width="530" height="298" type="application/x-shockwave-flash" allowFullScreen="true" bgcolor="#131313" scrolling="no"></iframe>',
      allowHttpsEmbed: true,
      thumbnail: {
        width: 300,
        height: 168
      },
      videoId: '36DBC5D07A7DDB0E5D9C36DBC5D07A7DDB0E5D9C',
      allowMobileEmbed: true,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=E542E2E6780641167F43E542E2E6780641167F43',
      name: 'Apple iOS 14.5 update forces tracking apps to ask user permission',
      description:
        "Facebook continues to post strong revenue in the first quarter of 2021 as it is worried about Apple's privacy changes affecting its bottom line.",
      thumbnailUrl:
        'https://tse4.mm.bing.net/th?id=OVF.cXltsJGD9WgPrVIiehW0YA&pid=Api',
      datePublished: '2021-04-28T23:54:59.0000000',
      publisher: [
        {
          name: 'USATODAY'
        }
      ],
      creator: {
        name: 'Terry Collins'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://www.usatoday.com/story/money/2021/04/28/facebook-earnings-apple-privacy-concerns-mark-zuckerberg/4877067001/',
      hostPageUrl:
        'https://www.usatoday.com/story/money/2021/04/28/facebook-earnings-apple-privacy-concerns-mark-zuckerberg/4877067001/',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://www.usatoday.com/story/money/2021/04/28/facebook-earnings-apple-privacy...',
      width: 660,
      height: 371,
      duration: 'PT44S',
      embedHtml:
        '<iframe title="USATODAY-Embed Player" width="930" height="630" frameborder="0" scrolling="no" allowfullscreen="true" marginheight="0" marginwidth="0" src="https://uw-media.usatoday.com/embed/video/7390568002/?placement=snow-embed"></iframe>',
      allowHttpsEmbed: true,
      thumbnail: {
        width: 300,
        height: 168
      },
      videoId: 'E542E2E6780641167F43E542E2E6780641167F43',
      allowMobileEmbed: true,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=CA42524A5F10EBA78212CA42524A5F10EBA78212',
      name: 'Apple unveils new anti-tracking privacy shield',
      description:
        'With Apple’s latest iPhone update, companies like Facebook and TikTok that make apps for your phone will now have to ask your permission to track you.',
      thumbnailUrl:
        'https://tse1.mm.bing.net/th?id=OVF.hzv3yUkaT99dF8WrB0cx%2fA&pid=Api',
      datePublished: '2021-04-27T23:06:55.0000000',
      publisher: [
        {
          name: 'NBC News'
        }
      ],
      isFamilyFriendly: true,
      contentUrl:
        'https://www.nbcnews.com/nightly-news/video/apple-unveils-new-anti-tracking-privacy-shield-110949957514',
      hostPageUrl:
        'https://www.nbcnews.com/nightly-news/video/apple-unveils-new-anti-tracking-privacy-shield-110949957514',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://www.nbcnews.com/nightly-news/video/apple-unveils-new-anti-tracking-privacy...',
      width: 1200,
      height: 630,
      duration: 'PT1M6S',
      embedHtml:
        '<iframe width="560" height="315" src="https://www.nbcnews.com/news/embedded-video/mmvo110949957514" scrolling="no" frameborder="0" allowfullscreen></iframe>',
      allowHttpsEmbed: true,
      thumbnail: {
        width: 300,
        height: 157
      },
      videoId: 'CA42524A5F10EBA78212CA42524A5F10EBA78212',
      allowMobileEmbed: true,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=0D6B157B0213B166ADC70D6B157B0213B166ADC7',
      name: 'Apple Watch ECG function goes live',
      description:
        "Tech Guide Editor Stephen Fenech has demonstrated how to take an ECG reading using the Apple Watch's recently activated electrocardiogram function which has been approved by the Therapeutic Goods Administration.",
      thumbnailUrl:
        'https://tse1.mm.bing.net/th?id=OVF.ILXp2HVTMnji3dzik5RlcQ&pid=Api',
      datePublished: '2021-05-01T00:28:53.0000000',
      publisher: [
        {
          name: 'YouTube'
        }
      ],
      creator: {
        name: 'Sky News Australia'
      },
      isAccessibleForFree: true,
      isFamilyFriendly: true,
      contentUrl: 'https://www.youtube.com/watch?v=QIPvn9EVQWE',
      hostPageUrl: 'https://www.youtube.com/watch?v=QIPvn9EVQWE',
      encodingFormat: 'h264',
      hostPageDisplayUrl: 'https://www.youtube.com/watch?v=QIPvn9EVQWE',
      width: 1280,
      height: 720,
      duration: 'PT1M30S',
      motionThumbnailUrl:
        'https://tse4.mm.bing.net/th?id=OM.x61msRMCexVrDQ&pid=Api',
      embedHtml:
        '<iframe width="1280" height="720" src="https://www.youtube.com/embed/QIPvn9EVQWE?autoplay=1" frameborder="0" allowfullscreen></iframe>',
      allowHttpsEmbed: true,
      viewCount: 1535,
      thumbnail: {
        width: 480,
        height: 360
      },
      videoId: '0D6B157B0213B166ADC70D6B157B0213B166ADC7',
      allowMobileEmbed: true,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=37B295436E219372DEF737B295436E219372DEF7',
      name: 'Epic Games v. Apple: Trial preview',
      description:
        "One of tech's biggest antitrust trials is about to begin; here's what to expect.",
      thumbnailUrl:
        'https://tse3.mm.bing.net/th?id=OVF.%2f8ZxT5SsJR5CPXtvw0LAjw&pid=Api',
      datePublished: '2021-04-30T13:00:03.0000000',
      publisher: [
        {
          name: 'CNET'
        }
      ],
      creator: {
        name: 'ashley esqueda'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://www.cnet.com/videos/epic-games-v-apple-trial-preview/',
      hostPageUrl:
        'https://www.cnet.com/videos/epic-games-v-apple-trial-preview/',
      encodingFormat: 'h264',
      hostPageDisplayUrl:
        'https://www.cnet.com/videos/epic-games-v-apple-trial-preview',
      width: 640,
      height: 360,
      duration: 'PT6M47S',
      motionThumbnailUrl:
        'https://tse1.mm.bing.net/th?id=OM.995ykyFuQ5WyNw&pid=Api',
      embedHtml:
        '<iframe src="https://www.cnet.com/videos/share/epic-games-v-apple-trial-preview/" width="480" height="270" frameBorder="0" seamless="seamless" allowFullScreen></iframe>',
      allowHttpsEmbed: true,
      thumbnail: {
        width: 600,
        height: 337
      },
      videoId: '37B295436E219372DEF737B295436E219372DEF7',
      allowMobileEmbed: true,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=90B6AFA89EBD8B28936890B6AFA89EBD8B289368',
      name: 'New Apple products are available for preorder',
      description:
        "In today's top stories, Google Assistant wants to get better at pronouncing unique names, the Uber app can help you schedule (and get to) your COVID vaccination and new Apple products are available for preorder.",
      thumbnailUrl:
        'https://tse3.mm.bing.net/th?id=OVF.2QyJ0eHUN8uIZ7V%2b%2bqM5tg&pid=Api',
      datePublished: '2021-05-01T11:00:14.0000000',
      publisher: [
        {
          name: 'CNET'
        }
      ],
      creator: {
        name: 'kara tsuboi'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://www.cnet.com/videos/new-apple-products-are-available-for-preorder/',
      hostPageUrl:
        'https://www.cnet.com/videos/new-apple-products-are-available-for-preorder/',
      encodingFormat: 'h264',
      hostPageDisplayUrl:
        'https://www.cnet.com/videos/new-apple-products-are-available-for-preorder',
      width: 640,
      height: 360,
      duration: 'PT1M31S',
      motionThumbnailUrl:
        'https://tse2.mm.bing.net/th?id=OM.aJMoi72eqK-2kA&pid=Api',
      embedHtml:
        '<iframe src="https://www.cnet.com/videos/share/new-apple-products-are-available-for-preorder/" width="480" height="270" frameBorder="0" seamless="seamless" allowFullScreen></iframe>',
      allowHttpsEmbed: true,
      thumbnail: {
        width: 600,
        height: 337
      },
      videoId: '90B6AFA89EBD8B28936890B6AFA89EBD8B289368',
      allowMobileEmbed: true,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=6F1D80A052E637E7BC846F1D80A052E637E7BC84',
      name: 'TheStreet Live Recap: Everything Jim Cramer Is Watching 4/29/21',
      description:
        "In Thursday's episode of TheStreet Live, Jim Cramer and Katherine Ross talk Apple, Facebook, Qualcomm, AMC, Ford and more.",
      thumbnailUrl:
        'https://tse3.mm.bing.net/th?id=OVF.dsVbTAeCtxyn0M0LT%2bl2qg&pid=Api',
      datePublished: '2021-04-29T19:24:29.0000000',
      publisher: [
        {
          name: 'Microsoft News'
        }
      ],
      creator: {
        name: 'TheStreet'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://www.msn.com/en-us/money/topstocks/thestreet-live-recap-everything-jim-cramer-is-watching-4-29-21/vp-BB1gbZSD',
      hostPageUrl:
        'https://www.msn.com/en-us/money/topstocks/thestreet-live-recap-everything-jim-cramer-is-watching-4-29-21/vp-BB1gbZSD',
      encodingFormat: 'h264',
      hostPageDisplayUrl:
        'https://www.msn.com/en-us/money/topstocks/thestreet-live-recap-everything-jim-cramer-is...',
      width: 640,
      height: 360,
      duration: 'PT15M',
      motionThumbnailUrl:
        'https://tse1.mm.bing.net/th?id=OM.hLznN-ZSoIAdbw&pid=Api',
      embedHtml:
        '<iframe width="1280" height="720" src="https://www.msn.com/en-us/money/topstocks/thestreet-live-recap-everything-jim-cramer-is-watching-4-29-21/vp-BB1gbZSD?embed=true&autoplay=true&ocid=bingembedvideo" scrolling ="no" frameborder="0" allowfullscreen></iframe>',
      allowHttpsEmbed: true,
      thumbnail: {
        width: 600,
        height: 337
      },
      videoId: '6F1D80A052E637E7BC846F1D80A052E637E7BC84',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=DF988BE4349AD7429074DF988BE4349AD7429074',
      name: 'Apple hit with EU antitrust charge over App Store',
      description:
        'Apple says the Swedish firm wants all the benefits of App Store, with none of the costs.',
      thumbnailUrl:
        'https://tse1.mm.bing.net/th?id=OVF.9mJrCU2ve9Kno4vE996UhQ&pid=Api',
      datePublished: '2021-04-30T14:17:10.0000000',
      publisher: [
        {
          name: 'Yahoo'
        }
      ],
      creator: {
        name: 'Reuters Videos'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://tw.tv.yahoo.com/factual/apple-hit-eu-antitrust-charge-141617747.html',
      hostPageUrl:
        'https://tw.tv.yahoo.com/factual/apple-hit-eu-antitrust-charge-141617747.html',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://tw.tv.yahoo.com/factual/apple-hit-eu-antitrust-charge-141617747.html',
      width: 600,
      height: 315,
      duration: 'PT1M49S',
      allowHttpsEmbed: false,
      viewCount: 388,
      thumbnail: {
        width: 300,
        height: 157
      },
      videoId: 'DF988BE4349AD7429074DF988BE4349AD7429074',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=7280D5C88CF3945E34867280D5C88CF3945E3486',
      name:
        '2022 Honda Civic adds wireless connections for CarPlay, Android Auto',
      description:
        'The redesigned 2022 Honda Civic has smarter driver assists to go with available wireless connections for Android Auto and Apple CarPlay..',
      thumbnailUrl:
        'https://tse1.mm.bing.net/th?id=OVF.FdmPvC1tQGc6%2f3C0WMYy3Q&pid=Api',
      datePublished: '2021-05-01T11:17:02.0000000',
      publisher: [
        {
          name: 'engadget'
        }
      ],
      creator: {
        name: 'Richard Lawler'
      },
      isFamilyFriendly: true,
      contentUrl: 'https://www.engadget.com/honda-civic-sedan-111702980.html',
      hostPageUrl: 'https://www.engadget.com/honda-civic-sedan-111702980.html',
      encodingFormat: 'h264',
      hostPageDisplayUrl:
        'https://www.engadget.com/honda-civic-sedan-111702980.html',
      width: 640,
      height: 360,
      duration: 'PT7M29S',
      motionThumbnailUrl:
        'https://tse3.mm.bing.net/th?id=OM.hjRelPOMyNWAcg&pid=Api',
      allowHttpsEmbed: false,
      thumbnail: {
        width: 600,
        height: 337
      },
      videoId: '7280D5C88CF3945E34867280D5C88CF3945E3486',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=CCFF6855D957528B9F00CCFF6855D957528B9F00',
      name: "Could This Be Apple's Best Quarter Ever? Apple Earnings Preview",
      description:
        "The Apple Maven's pre-earnings coverage explains why this could be one of Apple's best quarters in history.",
      thumbnailUrl:
        'https://tse3.mm.bing.net/th?id=OVF.HuBTwIK8%2fvhK%2b9oooOjwYg&pid=Api',
      datePublished: '2021-04-28T09:08:46.0000000',
      publisher: [
        {
          name: 'Microsoft News'
        }
      ],
      creator: {
        name: 'TheStreet'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://www.msn.com/en-us/video/beprepared/could-this-be-apples-best-quarter-ever-apple-earnings-preview/vi-BB1g8rCC',
      hostPageUrl:
        'https://www.msn.com/en-us/video/beprepared/could-this-be-apples-best-quarter-ever-apple-earnings-preview/vi-BB1g8rCC',
      encodingFormat: 'h264',
      hostPageDisplayUrl:
        'https://www.msn.com/en-us/video/beprepared/could-this-be-apples-best-quarter-ever-apple...',
      width: 640,
      height: 360,
      duration: 'PT1M12S',
      motionThumbnailUrl:
        'https://tse3.mm.bing.net/th?id=OM.AJ-LUlfZVWj_zA&pid=Api',
      embedHtml:
        '<iframe width="1280" height="720" src="https://www.msn.com/en-us/video/beprepared/could-this-be-apples-best-quarter-ever-apple-earnings-preview/vi-BB1g8rCC?embed=true&autoplay=true&ocid=bingembedvideo" scrolling ="no" frameborder="0" allowfullscreen></iframe>',
      allowHttpsEmbed: true,
      thumbnail: {
        width: 600,
        height: 337
      },
      videoId: 'CCFF6855D957528B9F00CCFF6855D957528B9F00',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=277599922E7612EEB896277599922E7612EEB896',
      name: 'TheStreet Live Recap: Everything Jim Cramer Is Watching 4/29/21',
      description:
        "In Thursday's episode of TheStreet Live, Jim Cramer and Katherine Ross talk Apple, Facebook, Qualcomm, AMC, Ford and more.",
      thumbnailUrl:
        'https://tse3.mm.bing.net/th?id=OVF.wvq%2fqGpdUvUlCklQt9NJiw&pid=Api',
      datePublished: '2021-04-29T19:24:29.0000000',
      publisher: [
        {
          name: 'Microsoft News'
        }
      ],
      creator: {
        name: 'TheStreet'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://www.msn.com/en-us/video/autosvideos/thestreet-live-recap-everything-jim-cramer-is-watching-4-29-21/vi-BB1gbZSD',
      hostPageUrl:
        'https://www.msn.com/en-us/video/autosvideos/thestreet-live-recap-everything-jim-cramer-is-watching-4-29-21/vi-BB1gbZSD',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://www.msn.com/en-us/video/autosvideos/thestreet-live-recap-everything-jim-cramer...',
      width: 720,
      height: 406,
      duration: 'PT15M',
      embedHtml:
        '<iframe width="1280" height="720" src="https://www.msn.com/en-us/video/autosvideos/thestreet-live-recap-everything-jim-cramer-is-watching-4-29-21/vi-BB1gbZSD?embed=true&autoplay=true&ocid=bingembedvideo" scrolling ="no" frameborder="0" allowfullscreen></iframe>',
      allowHttpsEmbed: true,
      thumbnail: {
        width: 300,
        height: 169
      },
      videoId: '277599922E7612EEB896277599922E7612EEB896',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=1AB8E44D7F0048A08DF21AB8E44D7F0048A08DF2',
      name: "Apple Q2 earnings crush analysts' expectations",
      description:
        'Yahoo Finance’s Jared Blikre breaks down Apple’s latest earnings report.',
      thumbnailUrl:
        'https://tse2.mm.bing.net/th?id=OVF.ZhQCoeFUD6P3b0f9g5zE1Q&pid=Api',
      datePublished: '2021-04-28T20:55:57.0000000',
      publisher: [
        {
          name: 'Yahoo'
        }
      ],
      creator: {
        name: 'Yahoo Finance Video'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://hk.tv.yahoo.com/finance/apple-q2-earnings-crush-analysts-205557478.html',
      hostPageUrl:
        'https://hk.tv.yahoo.com/finance/apple-q2-earnings-crush-analysts-205557478.html',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://hk.tv.yahoo.com/finance/apple-q2-earnings-crush-analysts-205557478.html',
      width: 600,
      height: 315,
      duration: 'PT1M52S',
      allowHttpsEmbed: false,
      viewCount: 26792,
      thumbnail: {
        width: 300,
        height: 157
      },
      videoId: '1AB8E44D7F0048A08DF21AB8E44D7F0048A08DF2',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=E8D57CFFB46B01923E55E8D57CFFB46B01923E55',
      name: 'Apple Turns in Another Blowout Quarter',
      description: 'zacks.com zacks.com/ultimate',
      thumbnailUrl:
        'https://tse2.mm.bing.net/th?id=OVF.9h8YuJC0FtQlSMyZz5V%2bYQ&pid=Api',
      datePublished: '2021-04-29T16:14:01.0000000',
      publisher: [
        {
          name: 'YouTube'
        }
      ],
      creator: {
        name: 'Zacks Investment Research'
      },
      isAccessibleForFree: true,
      isFamilyFriendly: true,
      contentUrl: 'https://www.youtube.com/watch?v=O_2K-9uutxg',
      hostPageUrl: 'https://www.youtube.com/watch?v=O_2K-9uutxg',
      encodingFormat: 'h264',
      hostPageDisplayUrl: 'https://www.youtube.com/watch?v=O_2K-9uutxg',
      width: 1280,
      height: 720,
      duration: 'PT49S',
      motionThumbnailUrl:
        'https://tse4.mm.bing.net/th?id=OM.VT6SAWu0_3zV6A&pid=Api',
      embedHtml:
        '<iframe width="1280" height="720" src="https://www.youtube.com/embed/O_2K-9uutxg?autoplay=1" frameborder="0" allowfullscreen></iframe>',
      allowHttpsEmbed: true,
      viewCount: 64,
      thumbnail: {
        width: 480,
        height: 360
      },
      videoId: 'E8D57CFFB46B01923E55E8D57CFFB46B01923E55',
      allowMobileEmbed: true,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=1D031D17CD5B23C7238B1D031D17CD5B23C7238B',
      name: 'Is Microsoft siding with Epic over Apple?',
      description:
        'Get More Engadget: • Like us on Facebook: http://www.facebook.com/engadget • Follow us on Twitter: http://www.twitter.com/engadget • Follow us on Instagram: http://www.instagram.com/engadget • Read more: http://www.engadget.com',
      thumbnailUrl:
        'https://tse2.mm.bing.net/th?id=OVF.IGRFt%2fqYSmADAobQqVHEhw&pid=Api',
      datePublished: '2021-05-01T13:04:07.0000000',
      publisher: [
        {
          name: 'YouTube'
        }
      ],
      creator: {
        name: 'Engadget'
      },
      isFamilyFriendly: true,
      contentUrl: 'https://www.youtube.com/watch?v=KKGnCInmzDM',
      hostPageUrl: 'https://www.youtube.com/watch?v=KKGnCInmzDM',
      encodingFormat: 'h264',
      hostPageDisplayUrl: 'https://www.youtube.com/watch?v=KKGnCInmzDM',
      width: 640,
      height: 360,
      duration: 'PT3M55S',
      motionThumbnailUrl:
        'https://tse4.mm.bing.net/th?id=OM.iyPHI1vNFx0DHQ&pid=Api',
      embedHtml:
        '<iframe width="1280" height="720" src="http://www.youtube.com/embed/KKGnCInmzDM?autoplay=1" frameborder="0" allowfullscreen></iframe>',
      allowHttpsEmbed: false,
      viewCount: 2120,
      thumbnail: {
        width: 480,
        height: 360
      },
      videoId: '1D031D17CD5B23C7238B1D031D17CD5B23C7238B',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=5B4E00765CD6685913685B4E00765CD668591368',
      name: 'What Apple’s blowout earnings means for Berkshire Hathaway',
      description:
        'Krish Sankar, Managing Dir. & Cowen Senior Research Analyst, joins Yahoo Finance’s Sibile Marcellus and Alexis Christoforous to discuss expectations for Berkshire Hathaway’s shareholders meeting.',
      thumbnailUrl:
        'https://tse1.mm.bing.net/th?id=OVF.X7yRd8FfZ21LuPoQAxCioA&pid=Api',
      datePublished: '2021-04-30T19:32:30.0000000',
      publisher: [
        {
          name: 'Yahoo'
        }
      ],
      creator: {
        name: 'Yahoo Finance Video'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://hk.tv.yahoo.com/finance/apple-blowout-earnings-means-berkshire-193230900.html',
      hostPageUrl:
        'https://hk.tv.yahoo.com/finance/apple-blowout-earnings-means-berkshire-193230900.html',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://hk.tv.yahoo.com/finance/apple-blowout-earnings-means-berkshire-193230900.html',
      width: 600,
      height: 315,
      duration: 'PT3M16S',
      allowHttpsEmbed: false,
      viewCount: 15549,
      thumbnail: {
        width: 300,
        height: 157
      },
      videoId: '5B4E00765CD6685913685B4E00765CD668591368',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=D0392F45AE4508CD6867D0392F45AE4508CD6867',
      name: 'Tech Support: Apple AirTags review',
      description:
        'Yahoo Finance’s Dan Howley breaks down Apple’s AirTag in this week’s Tech Support.',
      thumbnailUrl:
        'https://tse2.mm.bing.net/th?id=OVF.CSQ1FhRrtHd77rzJCEX6cA&pid=Api',
      datePublished: '2021-04-29T17:38:46.0000000',
      publisher: [
        {
          name: 'Yahoo'
        }
      ],
      creator: {
        name: 'Yahoo Finance Video'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://hk.tv.yahoo.com/finance/tech-support-apple-airtags-review-173846376.html',
      hostPageUrl:
        'https://hk.tv.yahoo.com/finance/tech-support-apple-airtags-review-173846376.html',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://hk.tv.yahoo.com/finance/tech-support-apple-airtags-review-173846376.html',
      width: 600,
      height: 315,
      duration: 'PT5M26S',
      allowHttpsEmbed: false,
      viewCount: 31721,
      thumbnail: {
        width: 300,
        height: 157
      },
      videoId: 'D0392F45AE4508CD6867D0392F45AE4508CD6867',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=BDA24195CAC7AA095BBBBDA24195CAC7AA095BBB',
      name: 'Apple, Facebook soar past earnings expectations',
      description:
        'The world\'s largest social media company said it expected next quarter\'s revenue to be stable or grow moderately, but warned that the third- and fourth-quarter growth rates could "significantly" decline, citing a new pop-up privacy notification from Apple that Facebook said could hurt its business.',
      thumbnailUrl:
        'https://tse4.mm.bing.net/th?id=OVF.jIQKdX9kJbyxBydXNjaTOw&pid=Api',
      datePublished: '2021-04-28T22:16:07.0000000',
      publisher: [
        {
          name: 'Yahoo'
        }
      ],
      creator: {
        name: 'Reuters Videos'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://tw.tv.yahoo.com/apple-announcement/apple-facebook-soar-past-earnings-221528192.html',
      hostPageUrl:
        'https://tw.tv.yahoo.com/apple-announcement/apple-facebook-soar-past-earnings-221528192.html',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://tw.tv.yahoo.com/apple-announcement/apple-facebook-soar-past-earnings-221528192...',
      width: 600,
      height: 315,
      duration: 'PT1M24S',
      allowHttpsEmbed: false,
      viewCount: 2294,
      thumbnail: {
        width: 300,
        height: 157
      },
      videoId: 'BDA24195CAC7AA095BBBBDA24195CAC7AA095BBB',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=5E7C9F1E0D00C61816B65E7C9F1E0D00C61816B6',
      name: 'New Apple products are available for preorder',
      description:
        "In today's top stories, Google Assistant wants to get better at pronouncing unique names, the Uber app can help you schedule (and get to) your COVID vaccination and new Apple products are available for preorder.",
      thumbnailUrl:
        'https://tse4.mm.bing.net/th?id=OVF.O0Jpogx7%2b8i%2b0MWBJ8KTag&pid=Api',
      datePublished: '2021-05-01T18:00:14.0000000',
      publisher: [
        {
          name: 'Yahoo'
        }
      ],
      creator: {
        name: 'CNET'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://www.yahoo.com/entertainment/apple-products-available-preorder-110014266.html',
      hostPageUrl:
        'https://www.yahoo.com/entertainment/apple-products-available-preorder-110014266.html',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://www.yahoo.com/entertainment/apple-products-available-preorder-110014266.html',
      width: 640,
      height: 360,
      duration: 'PT1M30S',
      allowHttpsEmbed: false,
      thumbnail: {
        width: 300,
        height: 168
      },
      videoId: '5E7C9F1E0D00C61816B65E7C9F1E0D00C61816B6',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=14A9FDBE0A965EB1128314A9FDBE0A965EB11283',
      name: 'Car Smashes Into Apple Crates After Failing to Stop for Police',
      description:
        'Video by Kristy Hall shows the response from emergency services. Credit: Kristy Hall via Storyful',
      thumbnailUrl:
        'https://tse3.mm.bing.net/th?id=OVF.76qCFsb1WM9KIEmy9eRMVQ&pid=Api',
      datePublished: '2021-04-29T10:42:09.0000000',
      publisher: [
        {
          name: 'Yahoo'
        }
      ],
      creator: {
        name: 'Storyful'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://tw.tv.yahoo.com/storyful-sg/car-smashes-apple-crates-failing-104209430.html',
      hostPageUrl:
        'https://tw.tv.yahoo.com/storyful-sg/car-smashes-apple-crates-failing-104209430.html',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://tw.tv.yahoo.com/storyful-sg/car-smashes-apple-crates-failing-104209430.html',
      width: 600,
      height: 315,
      duration: 'PT43S',
      allowHttpsEmbed: false,
      viewCount: 416,
      thumbnail: {
        width: 300,
        height: 157
      },
      videoId: '14A9FDBE0A965EB1128314A9FDBE0A965EB11283',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=D84FB71BEE2A5EB6643AD84FB71BEE2A5EB6643A',
      name: 'Wall Street falls, weighed down by Apple',
      description:
        'Surging crude prices drove the bottoms lines of oil majors Exxon Mobil and Chevron back into the black in the first quarter. But investors took profit on both stocks which have vastly outperformed the broader market this year.',
      thumbnailUrl:
        'https://tse1.mm.bing.net/th?id=OVF.Kea8JYKI4zJGbeoWtqTv%2bQ&pid=Api',
      datePublished: '2021-04-30T21:22:08.0000000',
      publisher: [
        {
          name: 'Yahoo'
        }
      ],
      creator: {
        name: 'Reuters Videos'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://tw.tv.yahoo.com/apple-announcement/wall-street-falls-weighed-down-212148831.html',
      hostPageUrl:
        'https://tw.tv.yahoo.com/apple-announcement/wall-street-falls-weighed-down-212148831.html',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://tw.tv.yahoo.com/apple-announcement/wall-street-falls-weighed-down-212148831.html',
      width: 600,
      height: 315,
      duration: 'PT1M28S',
      allowHttpsEmbed: false,
      viewCount: 2491,
      thumbnail: {
        width: 300,
        height: 157
      },
      videoId: 'D84FB71BEE2A5EB6643AD84FB71BEE2A5EB6643A',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=7D4DE229BA7B49E8DE2B7D4DE229BA7B49E8DE2B',
      name: 'EU accuses Apple of antitrust violations',
      description: 'EU accuses Apple of antitrust violations',
      thumbnailUrl:
        'https://tse2.mm.bing.net/th?id=OVF.UOVb9RCxpky8TG2EIXUTuw&pid=Api',
      datePublished: '2021-04-30T21:40:33.0000000',
      publisher: [
        {
          name: 'YouTube'
        }
      ],
      creator: {
        name: 'CBS4 Indy'
      },
      isFamilyFriendly: true,
      contentUrl: 'https://www.youtube.com/watch?v=FfQlaBFsRpI',
      hostPageUrl: 'https://www.youtube.com/watch?v=FfQlaBFsRpI',
      encodingFormat: 'h264',
      hostPageDisplayUrl: 'https://www.youtube.com/watch?v=FfQlaBFsRpI',
      width: 640,
      height: 360,
      duration: 'PT17S',
      motionThumbnailUrl:
        'https://tse4.mm.bing.net/th?id=OM.K97oSXu6KeJNfQ&pid=Api',
      embedHtml:
        '<iframe width="1280" height="720" src="http://www.youtube.com/embed/FfQlaBFsRpI?autoplay=1" frameborder="0" allowfullscreen></iframe>',
      allowHttpsEmbed: false,
      thumbnail: {
        width: 480,
        height: 360
      },
      videoId: '7D4DE229BA7B49E8DE2B7D4DE229BA7B49E8DE2B',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=D93BF4B24F5681338D80D93BF4B24F5681338D80',
      name: 'Top Stock Reports for Apple, Alphabet & BlackRock',
      description: 'Top Stock Reports for Apple, Alphabet & BlackRock',
      thumbnailUrl:
        'https://tse4.mm.bing.net/th?id=OVF.GBh85XMZwY%2bCDNWGAcEDiA&pid=Api',
      datePublished: '2021-04-30T18:13:06.0000000',
      publisher: [
        {
          name: 'Yahoo Finance'
        }
      ],
      creator: {
        name: 'Sheraz Mian'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://sg.finance.yahoo.com/news/top-stock-reports-apple-alphabet-181306156.html',
      hostPageUrl:
        'https://sg.finance.yahoo.com/news/top-stock-reports-apple-alphabet-181306156.html',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://sg.finance.yahoo.com/news/top-stock-reports-apple-alphabet-181306156.html',
      width: 900,
      height: 600,
      allowHttpsEmbed: false,
      thumbnail: {
        width: 300,
        height: 200
      },
      videoId: 'D93BF4B24F5681338D80D93BF4B24F5681338D80',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=46BBB2CF1E9C5691009D46BBB2CF1E9C5691009D',
      name: 'Earnings alert: Apple releases quarterly earnings',
      description:
        "Apple's Q2 earnings update with Yahoo Finance's Jared Blikre.",
      thumbnailUrl:
        'https://tse1.mm.bing.net/th?id=OVF.M0BoqYKEM5f7rfE8NVfaaA&pid=Api',
      datePublished: '2021-04-28T20:58:54.0000000',
      publisher: [
        {
          name: 'Yahoo'
        }
      ],
      creator: {
        name: 'Yahoo Finance Video'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://hk.tv.yahoo.com/finance/earnings-alert-apple-releases-quarterly-205854044.html',
      hostPageUrl:
        'https://hk.tv.yahoo.com/finance/earnings-alert-apple-releases-quarterly-205854044.html',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://hk.tv.yahoo.com/finance/earnings-alert-apple-releases-quarterly-205854044.html',
      width: 600,
      height: 315,
      duration: 'PT1M52S',
      allowHttpsEmbed: false,
      viewCount: 165707,
      thumbnail: {
        width: 300,
        height: 157
      },
      videoId: '46BBB2CF1E9C5691009D46BBB2CF1E9C5691009D',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=29EC087E2DA5AA3B90E529EC087E2DA5AA3B90E5',
      name: 'Warren Buffett: Tim Cook is one of the best managers in the world',
      description:
        'At the annual Berkshire Hathaway shareholders meeting live streamed on Yahoo Finance, Warren Buffett discusses Apple and the company’s management.',
      thumbnailUrl:
        'https://tse3.mm.bing.net/th?id=OVF.OirnWNmiokf9ItlHFq6MgQ&pid=Api',
      datePublished: '2021-05-01T19:18:58.0000000',
      publisher: [
        {
          name: 'Yahoo'
        }
      ],
      creator: {
        name: 'Yahoo Finance Video'
      },
      isFamilyFriendly: true,
      contentUrl:
        'https://hk.tv.yahoo.com/popular/warren-buffett-tim-cook-one-191858918.html',
      hostPageUrl:
        'https://hk.tv.yahoo.com/popular/warren-buffett-tim-cook-one-191858918.html',
      encodingFormat: '',
      hostPageDisplayUrl:
        'https://hk.tv.yahoo.com/popular/warren-buffett-tim-cook-one-191858918.html',
      width: 600,
      height: 315,
      duration: 'PT4M52S',
      allowHttpsEmbed: false,
      viewCount: 16543,
      thumbnail: {
        width: 300,
        height: 157
      },
      videoId: '29EC087E2DA5AA3B90E529EC087E2DA5AA3B90E5',
      allowMobileEmbed: false,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=7BCB1C1BFC8C43A4992A7BCB1C1BFC8C43A4992A',
      name: "Jack Daniel's | Tennessee Apple | CA",
      description: "Learn about how Jack Daniel's Tennessee Apple is made.",
      thumbnailUrl:
        'https://tse4.mm.bing.net/th?id=OVF.1SaSyxZ0HhOl3nX8Dcvrmw&pid=Api',
      datePublished: '2021-04-29T14:51:48.0000000',
      publisher: [
        {
          name: 'YouTube'
        }
      ],
      creator: {
        name: "Jack Daniel's"
      },
      isAccessibleForFree: true,
      isFamilyFriendly: true,
      contentUrl: 'https://www.youtube.com/watch?v=DX959-woWao',
      hostPageUrl: 'https://www.youtube.com/watch?v=DX959-woWao',
      encodingFormat: 'h264',
      hostPageDisplayUrl: 'https://www.youtube.com/watch?v=DX959-woWao',
      width: 1280,
      height: 720,
      duration: 'PT55S',
      motionThumbnailUrl:
        'https://tse4.mm.bing.net/th?id=OM.KpmkQ4z8GxzLew&pid=Api',
      embedHtml:
        '<iframe width="1280" height="720" src="https://www.youtube.com/embed/DX959-woWao?autoplay=1" frameborder="0" allowfullscreen></iframe>',
      allowHttpsEmbed: true,
      viewCount: 51,
      thumbnail: {
        width: 480,
        height: 360
      },
      videoId: '7BCB1C1BFC8C43A4992A7BCB1C1BFC8C43A4992A',
      allowMobileEmbed: true,
      isSuperfresh: true
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=05E68C7429C4B9C6300805E68C7429C4B9C63008',
      name: 'Apple Spring 2021 event in 11 minutes',
      description:
        'Apple announces new iMac, AirTags, iPad Pro with the M1 processor, and more at its Spring Loaded event. Hereb',
      thumbnailUrl:
        'https://tse4.mm.bing.net/th?id=OVP.TEPOb8GCVp3x42pimfLdtAEsDh&pid=Api',
      datePublished: '2021-04-20T18:42:26.0000000',
      publisher: [
        {
          name: 'YouTube'
        }
      ],
      creator: {
        name: 'The Verge'
      },
      isAccessibleForFree: true,
      isFamilyFriendly: true,
      contentUrl: 'https://www.youtube.com/watch?v=XjDh_5ZH9wQ',
      hostPageUrl: 'https://www.youtube.com/watch?v=XjDh_5ZH9wQ',
      encodingFormat: 'h264',
      hostPageDisplayUrl: 'https://www.youtube.com/watch?v=XjDh_5ZH9wQ',
      width: 1280,
      height: 720,
      duration: 'PT10M55S',
      motionThumbnailUrl:
        'https://tse1.mm.bing.net/th?id=OM.CDDGucQpdIzmBQ&pid=Api',
      embedHtml:
        '<iframe width="1280" height="720" src="https://www.youtube.com/embed/XjDh_5ZH9wQ?autoplay=1" frameborder="0" allowfullscreen></iframe>',
      allowHttpsEmbed: true,
      viewCount: 744548,
      thumbnail: {
        width: 300,
        height: 225
      },
      videoId: '05E68C7429C4B9C6300805E68C7429C4B9C63008',
      allowMobileEmbed: true,
      isSuperfresh: false
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=5688ADEEFB85596528925688ADEEFB8559652892',
      name: 'Apple TV 2019: Everything to know',
      description:
        "Hands-on with the Apple TV app on iPads, Apple TV and Samsung TVs. Watch Apple's TV Plus event highlights https://youtu.be/DGsRNR_C3gE You can buy Apple TV 4K on Amazon here: https://www.amazon.com/dp/B075NHCSS4/?tag=cnet-youtube-20 Subscribe to CNET: https://www.youtube.com/user/CNETTV CNET playlists: https://www.youtube.com/user/CNETTV ...",
      thumbnailUrl:
        'https://tse3.mm.bing.net/th?id=OVP.N_9L8dZPTBnoVQ6HFxrO5AHgFo&pid=Api',
      datePublished: '2019-05-26T13:00:08.0000000',
      publisher: [
        {
          name: 'YouTube'
        }
      ],
      creator: {
        name: 'CNET'
      },
      isAccessibleForFree: true,
      isFamilyFriendly: true,
      contentUrl: 'https://www.youtube.com/watch?v=v1u7qS8qbew',
      hostPageUrl: 'https://www.youtube.com/watch?v=v1u7qS8qbew',
      encodingFormat: 'h264',
      hostPageDisplayUrl: 'https://www.youtube.com/watch?v=v1u7qS8qbew',
      width: 1280,
      height: 720,
      duration: 'PT8M8S',
      motionThumbnailUrl:
        'https://tse1.mm.bing.net/th?id=OM.kihlWYX77q2IVg_1614961633&pid=Api',
      embedHtml:
        '<iframe width="1280" height="720" src="https://www.youtube.com/embed/v1u7qS8qbew?autoplay=1" frameborder="0" allowfullscreen></iframe>',
      allowHttpsEmbed: true,
      viewCount: 1138080,
      thumbnail: {
        width: 480,
        height: 360
      },
      videoId: '5688ADEEFB85596528925688ADEEFB8559652892',
      allowMobileEmbed: true,
      isSuperfresh: false
    },
    {
      webSearchUrl:
        'https://www.bing.com/videos/search?q=apple&view=detail&mid=49156416AFDF37A7FFE249156416AFDF37A7FFE2',
      name: 'September Event 2019 — Apple',
      description:
        'Innovation takes the stage September 10, 2019. Check out the all-new iPhone 11 Pro, iPhone 11, Apple Watch Series 5, and iPad. And get the latest on Apple Arcade and Apple TV+. 3:20 — Apple Arcade 13:12 — Apple TV+ 19:58 — Introducing the all-new iPad 36:35 — Introducing Apple Watch Series 5 46:56 — Introducing iPhone 11 1:07:40 ...',
      thumbnailUrl:
        'https://tse2.mm.bing.net/th?id=OVP.iZ9uVGOEOrR-ufcCVSoJtgHfFn&pid=Api',
      datePublished: '2019-09-10T22:03:19.0000000',
      publisher: [
        {
          name: 'YouTube'
        }
      ],
      creator: {
        name: 'Apple'
      },
      isAccessibleForFree: true,
      isFamilyFriendly: true,
      contentUrl: 'https://www.youtube.com/watch?v=-rAeqN-Q7x4',
      hostPageUrl: 'https://www.youtube.com/watch?v=-rAeqN-Q7x4',
      encodingFormat: 'h264',
      hostPageDisplayUrl: 'https://www.youtube.com/watch?v=-rAeqN-Q7x4',
      width: 1280,
      height: 720,
      duration: 'PT1H42M19S',
      motionThumbnailUrl:
        'https://tse4.mm.bing.net/th?id=OM.4v-nN9-vFmQVSQ_1615574020&pid=Api',
      embedHtml:
        '<iframe width="1280" height="720" src="https://www.youtube.com/embed/-rAeqN-Q7x4?autoplay=1" frameborder="0" allowfullscreen></iframe>',
      allowHttpsEmbed: true,
      viewCount: 9434615,
      thumbnail: {
        width: 479,
        height: 359
      },
      videoId: '49156416AFDF37A7FFE249156416AFDF37A7FFE2',
      allowMobileEmbed: true,
      isSuperfresh: false
    }
  ],
  nextOffset: 38,
  pivotSuggestions: [
    {
      pivot: 'apple',
      suggestions: [
        {
          text: 'Microsoft',
          displayText: 'Microsoft',
          webSearchUrl:
            'https://www.bing.com/videos/search?q=Microsoft&tq=%7b%22pq%22%3a%22apple%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22apple%22%2c%22pv%22%3a%22apple%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Microsoft%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=VRQBPS',
          searchLink:
            'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Microsoft&tq=%7b%22pq%22%3a%22apple%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22apple%22%2c%22pv%22%3a%22apple%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Microsoft%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d',
          thumbnail: {
            thumbnailUrl:
              'https://tse3.mm.bing.net/th?q=Microsoft&pid=Api&mkt=en-US&adlt=moderate&t=1'
          }
        },
        {
          text: 'Nokia',
          displayText: 'Nokia',
          webSearchUrl:
            'https://www.bing.com/videos/search?q=Nokia&tq=%7b%22pq%22%3a%22apple%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22apple%22%2c%22pv%22%3a%22apple%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Nokia%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=VRQBPS',
          searchLink:
            'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Nokia&tq=%7b%22pq%22%3a%22apple%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22apple%22%2c%22pv%22%3a%22apple%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Nokia%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d',
          thumbnail: {
            thumbnailUrl:
              'https://tse1.mm.bing.net/th?q=Nokia&pid=Api&mkt=en-US&adlt=moderate&t=1'
          }
        },
        {
          text: 'Google',
          displayText: 'Google',
          webSearchUrl:
            'https://www.bing.com/videos/search?q=Google&tq=%7b%22pq%22%3a%22apple%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22apple%22%2c%22pv%22%3a%22apple%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Google%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=VRQBPS',
          searchLink:
            'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Google&tq=%7b%22pq%22%3a%22apple%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22apple%22%2c%22pv%22%3a%22apple%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Google%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d',
          thumbnail: {
            thumbnailUrl:
              'https://tse4.mm.bing.net/th?q=Google&pid=Api&mkt=en-US&adlt=moderate&t=1'
          }
        },
        {
          text: 'Sony',
          displayText: 'Sony',
          webSearchUrl:
            'https://www.bing.com/videos/search?q=Sony&tq=%7b%22pq%22%3a%22apple%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22apple%22%2c%22pv%22%3a%22apple%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Sony%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=VRQBPS',
          searchLink:
            'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Sony&tq=%7b%22pq%22%3a%22apple%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22apple%22%2c%22pv%22%3a%22apple%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Sony%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d',
          thumbnail: {
            thumbnailUrl:
              'https://tse2.mm.bing.net/th?q=Sony&pid=Api&mkt=en-US&adlt=moderate&t=1'
          }
        },
        {
          text: 'Intel Corporation',
          displayText: 'Intel',
          webSearchUrl:
            'https://www.bing.com/videos/search?q=Intel+Corporation&tq=%7b%22pq%22%3a%22apple%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22apple%22%2c%22pv%22%3a%22apple%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Intel%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=VRQBPS',
          searchLink:
            'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Intel+Corporation&tq=%7b%22pq%22%3a%22apple%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22apple%22%2c%22pv%22%3a%22apple%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Intel%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d',
          thumbnail: {
            thumbnailUrl:
              'https://tse1.mm.bing.net/th?q=Intel+Corporation&pid=Api&mkt=en-US&adlt=moderate&t=1'
          }
        },
        {
          text: 'Samsung Group',
          displayText: 'Samsung',
          webSearchUrl:
            'https://www.bing.com/videos/search?q=Samsung+Group&tq=%7b%22pq%22%3a%22apple%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22apple%22%2c%22pv%22%3a%22apple%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Samsung%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=VRQBPS',
          searchLink:
            'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Samsung+Group&tq=%7b%22pq%22%3a%22apple%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22apple%22%2c%22pv%22%3a%22apple%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Samsung%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d',
          thumbnail: {
            thumbnailUrl:
              'https://tse4.mm.bing.net/th?q=Samsung+Group&pid=Api&mkt=en-US&adlt=moderate&t=1'
          }
        },
        {
          text: 'Android Phone',
          displayText: 'Android',
          webSearchUrl:
            'https://www.bing.com/videos/search?q=Android+Phone&tq=%7b%22pq%22%3a%22apple%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22apple%22%2c%22pv%22%3a%22apple%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Android%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=VRQBPS',
          searchLink:
            'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Android+Phone&tq=%7b%22pq%22%3a%22apple%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22apple%22%2c%22pv%22%3a%22apple%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Android%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d',
          thumbnail: {
            thumbnailUrl:
              'https://tse2.mm.bing.net/th?q=Android+Phone&pid=Api&mkt=en-US&adlt=moderate&t=1'
          }
        }
      ]
    }
  ],
  relatedSearches: [
    {
      text: 'Apple Products',
      displayText: 'Apple Products',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Products&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Products',
      thumbnail: {
        thumbnailUrl:
          'https://tse3.mm.bing.net/th?q=Apple+Products&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple iPhone',
      displayText: 'Apple iPhone',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+iPhone&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+iPhone',
      thumbnail: {
        thumbnailUrl:
          'https://tse4.mm.bing.net/th?q=Apple+iPhone&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Store',
      displayText: 'Apple Store',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Store&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Store',
      thumbnail: {
        thumbnailUrl:
          'https://tse4.mm.bing.net/th?q=Apple+Store&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Event',
      displayText: 'Apple Event',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Event&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Event',
      thumbnail: {
        thumbnailUrl:
          'https://tse3.mm.bing.net/th?q=Apple+Event&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Recipes',
      displayText: 'Apple Recipes',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Recipes&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Recipes',
      thumbnail: {
        thumbnailUrl:
          'https://tse4.mm.bing.net/th?q=Apple+Recipes&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Commercial',
      displayText: 'Apple Commercial',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Commercial&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Commercial',
      thumbnail: {
        thumbnailUrl:
          'https://tse1.mm.bing.net/th?q=Apple+Commercial&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Live',
      displayText: 'Apple Live',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Live&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Live',
      thumbnail: {
        thumbnailUrl:
          'https://tse1.mm.bing.net/th?q=Apple+Live&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Event 2020',
      displayText: 'Apple Event 2020',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Event+2020&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Event+2020',
      thumbnail: {
        thumbnailUrl:
          'https://tse3.mm.bing.net/th?q=Apple+Event+2020&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Store New',
      displayText: 'Apple Store New',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Store+New&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Store+New',
      thumbnail: {
        thumbnailUrl:
          'https://tse4.mm.bing.net/th?q=Apple+Store+New&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Support',
      displayText: 'Apple Support',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Support&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Support',
      thumbnail: {
        thumbnailUrl:
          'https://tse2.mm.bing.net/th?q=Apple+Support&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Advertising',
      displayText: 'Apple Advertising',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Advertising&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Advertising',
      thumbnail: {
        thumbnailUrl:
          'https://tse1.mm.bing.net/th?q=Apple+Advertising&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Watch Series 5',
      displayText: 'Apple Watch Series 5',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Watch+Series+5&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Watch+Series+5',
      thumbnail: {
        thumbnailUrl:
          'https://tse4.mm.bing.net/th?q=Apple+Watch+Series+5&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple iPhone 11',
      displayText: 'Apple iPhone 11',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+iPhone+11&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+iPhone+11',
      thumbnail: {
        thumbnailUrl:
          'https://tse4.mm.bing.net/th?q=Apple+iPhone+11&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Retail Store',
      displayText: 'Apple Retail Store',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Retail+Store&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Retail+Store',
      thumbnail: {
        thumbnailUrl:
          'https://tse1.mm.bing.net/th?q=Apple+Retail+Store&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple iPhone XS',
      displayText: 'Apple iPhone XS',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+iPhone+XS&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+iPhone+XS',
      thumbnail: {
        thumbnailUrl:
          'https://tse1.mm.bing.net/th?q=Apple+iPhone+XS&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Event 2019',
      displayText: 'Apple Event 2019',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Event+2019&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Event+2019',
      thumbnail: {
        thumbnailUrl:
          'https://tse3.mm.bing.net/th?q=Apple+Event+2019&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple iPhone XR',
      displayText: 'Apple iPhone XR',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+iPhone+XR&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+iPhone+XR',
      thumbnail: {
        thumbnailUrl:
          'https://tse4.mm.bing.net/th?q=Apple+iPhone+XR&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple PC',
      displayText: 'Apple PC',
      webSearchUrl: 'https://www.bing.com/videos/search?q=Apple+PC&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+PC',
      thumbnail: {
        thumbnailUrl:
          'https://tse2.mm.bing.net/th?q=Apple+PC&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Cake',
      displayText: 'Apple Cake',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Cake&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Cake',
      thumbnail: {
        thumbnailUrl:
          'https://tse3.mm.bing.net/th?q=Apple+Cake&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Announcement',
      displayText: 'Apple Announcement',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Announcement&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Announcement',
      thumbnail: {
        thumbnailUrl:
          'https://tse2.mm.bing.net/th?q=Apple+Announcement&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Desserts',
      displayText: 'Apple Desserts',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Desserts&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Desserts',
      thumbnail: {
        thumbnailUrl:
          'https://tse2.mm.bing.net/th?q=Apple+Desserts&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple iPad',
      displayText: 'Apple iPad',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+iPad&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+iPad',
      thumbnail: {
        thumbnailUrl:
          'https://tse3.mm.bing.net/th?q=Apple+iPad&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple iPhone 12',
      displayText: 'Apple iPhone 12',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+iPhone+12&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+iPhone+12',
      thumbnail: {
        thumbnailUrl:
          'https://tse3.mm.bing.net/th?q=Apple+iPhone+12&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple News Today',
      displayText: 'Apple News Today',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+News+Today&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+News+Today',
      thumbnail: {
        thumbnailUrl:
          'https://tse1.mm.bing.net/th?q=Apple+News+Today&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple iPhone SE',
      displayText: 'Apple iPhone SE',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+iPhone+SE&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+iPhone+SE',
      thumbnail: {
        thumbnailUrl:
          'https://tse4.mm.bing.net/th?q=Apple+iPhone+SE&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Desktop',
      displayText: 'Apple Desktop',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Desktop&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Desktop',
      thumbnail: {
        thumbnailUrl:
          'https://tse3.mm.bing.net/th?q=Apple+Desktop&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Home Kit',
      displayText: 'Apple Home Kit',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Home+Kit&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Home+Kit',
      thumbnail: {
        thumbnailUrl:
          'https://tse4.mm.bing.net/th?q=Apple+Home+Kit&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Music',
      displayText: 'Apple Music',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Music&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Music',
      thumbnail: {
        thumbnailUrl:
          'https://tse2.mm.bing.net/th?q=Apple+Music&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Company',
      displayText: 'Apple Company',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Company&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Company',
      thumbnail: {
        thumbnailUrl:
          'https://tse4.mm.bing.net/th?q=Apple+Company&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Canada',
      displayText: 'Apple Canada',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Canada&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Canada',
      thumbnail: {
        thumbnailUrl:
          'https://tse1.mm.bing.net/th?q=Apple+Canada&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Fried Apples',
      displayText: 'Fried Apples',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Fried+Apples&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Fried+Apples',
      thumbnail: {
        thumbnailUrl:
          'https://tse4.mm.bing.net/th?q=Fried+Apples&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Store Shopping',
      displayText: 'Apple Store Shopping',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Store+Shopping&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Store+Shopping',
      thumbnail: {
        thumbnailUrl:
          'https://tse2.mm.bing.net/th?q=Apple+Store+Shopping&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Food',
      displayText: 'Apple Food',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Food&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Food',
      thumbnail: {
        thumbnailUrl:
          'https://tse3.mm.bing.net/th?q=Apple+Food&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Channel',
      displayText: 'Apple Channel',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Channel&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Channel',
      thumbnail: {
        thumbnailUrl:
          'https://tse4.mm.bing.net/th?q=Apple+Channel&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple iPhone 12 Pro',
      displayText: 'Apple iPhone 12 Pro',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+iPhone+12+Pro&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+iPhone+12+Pro',
      thumbnail: {
        thumbnailUrl:
          'https://tse2.mm.bing.net/th?q=Apple+iPhone+12+Pro&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Ads',
      displayText: 'Apple Ads',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Ads&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Ads',
      thumbnail: {
        thumbnailUrl:
          'https://tse1.mm.bing.net/th?q=Apple+Ads&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Computers',
      displayText: 'Apple Computers',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Computers&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Computers',
      thumbnail: {
        thumbnailUrl:
          'https://tse1.mm.bing.net/th?q=Apple+Computers&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Support App',
      displayText: 'Apple Support App',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Support+App&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Support+App',
      thumbnail: {
        thumbnailUrl:
          'https://tse3.mm.bing.net/th?q=Apple+Support+App&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Tablet',
      displayText: 'Apple Tablet',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Tablet&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Tablet',
      thumbnail: {
        thumbnailUrl:
          'https://tse3.mm.bing.net/th?q=Apple+Tablet&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    },
    {
      text: 'Apple Live Stream',
      displayText: 'Apple Live Stream',
      webSearchUrl:
        'https://www.bing.com/videos/search?q=Apple+Live+Stream&FORM=VRPATC',
      searchLink:
        'https://api.cognitive.microsoft.com/api/v7/videos/search?q=Apple+Live+Stream',
      thumbnail: {
        thumbnailUrl:
          'https://tse1.mm.bing.net/th?q=Apple+Live+Stream&pid=Api&mkt=en-US&adlt=moderate&t=1'
      }
    }
  ],
  currentOffset: 0
};

export const darkMode = (state = true, action) => {
  switch (action.type) {
    case at.GET_DARK_MODE: {
      return { ...state };
    }
    case at.SET_DARK_MODE: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const queryType = (state = 'all', action) => {
  switch (action.type) {
    case at.GET_QUERY_TYPE: {
      return { ...state };
    }
    case at.SET_QUERY_TYPE: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const userSubscription = (state = false, action) => {
  switch (action.type) {
    case at.GET_USER_SUBSCRIPTION: {
      return { ...state };
    }
    case at.SET_USER_SUBSCRIPTION: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const popularVideos = (state = resultAPI, action) => {
  switch (action.type) {
    case at.FETCH_SUCCESS_POPULAR_VIDEOS: {
      return action.popularVideos;
    }
    case at.FETCH_FAILURE_POPULAR_VIDEOS: {
      return {
        ...state,
        errorStatus: 'failed'
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  darkMode,
  popularVideos,
  queryType,
  userSubscription
});
