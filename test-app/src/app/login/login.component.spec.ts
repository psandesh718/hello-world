import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  it('login successful should return 1 if id=="admin" && pass="aa"', () => { 
	  const comp = new LoginComponent();
	  let result = comp.loginFunc('admin','aa');
	  expect(result).toBe(1); 
  });
});
