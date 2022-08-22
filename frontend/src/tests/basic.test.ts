// import { describe, test, expect } from 'vitest'
// import { shallowMount } from '@vue/test-utils'
// import Appheader from '@/components/Appheader.vue'
// import useFirebase from '@/composable/useFirebase';

// const { user } = useFirebase();


// test('Login button shows up if not logged in', () => {
//     const wrapper = shallowMount(Appheader) 
//     expect('#test1').toBe(true)
//   })




import { expect,test } from 'vitest'


const input = Math.sqrt(4)
test('testtest',() =>{
expect(input).to.equal(2) // chai API
expect(input).toBe(2)})

