<template>
  <select id="locale-select" v-model="currentLocale">
    <option
      v-for="optionLocale in supportLocales"
      :key="optionLocale"
      :value="optionLocale">
      {{ optionLocale }}
    </option>
  </select>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'SetLocales',
  setup () {
    const { t, locale } = useI18n({ useScope: 'global' })
    const store = useStore()
    const currentLocale = computed({
      get () {
        return store.getters.getLocale
      },
      set (data) {
        store.commit('setLocale', data)
        locale.value = data
      }
    })
    const supportLocales = ref(['ru', 'ua'])
    return { t, locale, currentLocale, supportLocales }
  }
})
</script>

<style scoped>

</style>
