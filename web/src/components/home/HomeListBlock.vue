<template>
  <section-block id="list" class="list-block home-list" variant="white" size="large">
    <div class="container">
      <div class="list-block__heading">
        <XyzTransition appear-visible appear xyz="fade up">
          <h2 class="list-block__title" v-html="heading.title"></h2>
        </XyzTransition>
      </div>

      <XyzTransitionGroup
        group
        tag="ul"
        appear-visible
        v-if="list && list.length > 0"
        class="list-block__list"
        xyz="fade up ease-out-back stagger-1"
        duration="auto"
      >
        <li class="list-block__item" v-for="node in list" :key="node.id">
          <h3 class="list-block__item-title">{{ node.title }}</h3>
          <p class="list-block__item-body">{{ node.body }}</p>
        </li>
      </XyzTransitionGroup>
    </div>
  </section-block>
</template>

<script>
import SectionBlock from '../SectionBlock'
export default {
  name: 'HomeListBlock',
  data() {
    return {
      heading: {
        title: '<span>What</span> we do',
        body:
          'We deliver robust marketing and design services to some of the biggest and most influential brands and businesses with an entrepreneurial spirit. We’ve successfully built startup projects and seen them through acquisition, grown traffic for major web properties and designed some of the most cutting edge e-commerce experiences.'
      },

      isVisible: false,
      columns: 3,
      list: [
        {
          id: 1,
          title: 'Marketing',
          body:
            'Crafting some of the most innovative online experiences using Shopify’s platform with clients ranging from family owned bakeries to restaurants with integrated POS systems to large online catalogues with 1000’s of SKU’s built to maintain hundreds of thousands in revenue.'
        },
        {
          id: 2,
          title: 'Shopify',
          body:
            'Our study of the web started in early 1999 with the start of the dotcom boom. From basic HTML/CSS web pages to complex solutions utilizing PHP, Ruby on Rails, React and more, we’ve formed a strong foundation of the frameworks and tools that form the basis of the web today. From our experience, we’ve crafted an expertise in the use of minimalistic and intuitive user experiences which we’ve found to boost conversions and useability on the web.'
        },
        {
          id: 3,
          title: 'Web Design & Development',
          body: `We bring 15+ years experience in creative branding and identity development to help you build your world class brand. We use a systematic process to help you build a brand that effectively positions your product/service in the marketplace.`
        },
        {
          id: 4,
          title: 'NFT Marketing',
          body: `We've successfully sold out NFT projects for prominent brands and early NFT evangelists. Our team will assist you in crafting a successful NFT marketing roadmap including; Paid media management (Google Ads, Reddit Ads, Meta Ads, Twitter Ads, YouTube Ads), Crypto Endemic Media Management, Crypto PR Support, E-mail Marketing Management, Funnel Marketing and more. Our primary goal is delivery world class marketing to sell out projects and we've successfully sold out projects multiple times, some in under 59 seconds!`
        },
        {
          id: 5,
          title: 'NFT Strategy',
          body: `Our team has worked and strategized across a dozen NFT drops ranging from some of the World's most influential IP to startup NFT concepts. Our team brings more than a decade of experience in crypto starting with early investments in the Ethereum ecosystem to ICO marketing in '16 & '17. We work with team's to leverage our NFT strategy experience including; NFT tokenomics, generative design, trait table consulting, NFT market positioning and go-to-market strategy.`
        },
        {
          id: 6,
          title: 'Web3 & Smart Contract Development',
          body: `We develop top-of-the-line smart contracts, utilizing the most up-to-date innovations and gas optimization techniques. Secure, optimized, and reliable on any EVM compatible network (ETH, MATIC, AVAX) or Solana.`
        }
        // {
        //   id: 6,
        //   title: 'Branding & Design',
        //   body: `Bringing more than 10 years experience in optimizing organic SEO campaigns across a variety of media. We specialize in growing organic visibility to content on the internet’s most valuable properties. We've worked in crafting large scale SEO strategy for some of the world's most innovative companies and bring a wealth of experience in the digital space to our client's brands.`
        // }
      ]
    }
  },
  computed: {
    gridColumnClasses() {
      return {
        three: this.columns === 3,
        two: this.columns === 2
      }
    }
  },
  components: {
    SectionBlock
  }
}
</script>

<style lang="scss" scoped>
.list-block__heading {
  display: block;
  margin-bottom: rfs(8rem);

  @include media('>tablet') {
    width: 50%;
  }
}
.list-block__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: rfs(2rem);
  list-style: none;
  grid-row-gap: rfs(1rem);
  margin: 0;
  padding: 0;

  @include media('>tablet') {
    grid-row-gap: rfs(6rem);
  }
}

.list-block__item-title {
  @include body-m;
  font-weight: var(--font-weight-semibold);
  margin-bottom: rfs(1rem);

  @include media('>tablet') {
    @include body-l;
    font-weight: var(--font-weight-semibold);
  }
}

.list-block__item-body {
  color: var(--color-text);
}
</style>
