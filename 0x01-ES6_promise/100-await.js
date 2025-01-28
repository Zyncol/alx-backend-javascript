import {upload, createUser} from './utils';

export defualt async function asyncUploadUser(){
  let res = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    res = {photo, user};
  } catch (err) {
    res = {photo: null, user:null};
  }
 return res;
}
