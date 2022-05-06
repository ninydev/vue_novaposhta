import { useToast } from 'vue-toast-notification'
const toast = useToast()

export default {
  actions: {
    showToastInfo (msg) {
      toast.info(msg)
    },
    showToastSuccess (msg) {
      toast.success(msg)
    },
    showToastError (msg) {
      toast.error(msg)
    }
  }
}
