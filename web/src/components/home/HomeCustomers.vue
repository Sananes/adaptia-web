<template>
  <section-block class="customers" variant="white" size="large">
    <div class="container">
      <div class="customers__heading">
        <XyzTransitionGroup xyz="fade stagger-1" appear-visible>
          <h2 key="1" class="customers__title">From the inside <span class="outline">out</span></h2>
          <p key="2" class="customers__subheader">
            Our team and our culture is fueled by passion: for what we do, for the people we do it
            for, and for the people we work alongside. Take a glimpse behind the scenes at the heart
            of our company and the people who make up Adaptia.
          </p>
        </XyzTransitionGroup>
      </div>

      <XyzTransitionGroup tag="ul" class="customers__list" xyz="fade up stagger-1" appear-visible>
        <li class="customers__item" v-for="(item, index) in 12" :key="index">
          <img
            class="customers__logo"
            :src="`https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo${
              Math.floor(Math.random() * 4) + 1
            }.png`"
          />
        </li>
      </XyzTransitionGroup>
    </div>
  </section-block>
</template>

<script>
import SectionBlock from '../SectionBlock'
export default {
  name: 'Customers',
  components: { SectionBlock },
}
</script>

<style lang="scss" scoped>
.customers {
  &__heading {
    margin-bottom: rfs(8rem);

    @include media('>tablet') {
      width: 60%;
    }

    @include media('>desktop') {
      width: 35%;
    }
  }

  &__title {
    margin-bottom: rfs(1rem);
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding-left: 0;
  }

  &__item {
    width: 25%;
    padding: rfs(2rem 1rem);
  }

  &__logo {
    width: 12rem;
    display: block;
    margin: 0 auto;
  }
}
</style>