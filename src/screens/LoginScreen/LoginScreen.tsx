import { View, Text, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/slices/AuthSlice';
import { useRouter } from 'expo-router';

const schema = z.object({
  email: z.string().email('Correo inválido'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
});

type LoginForm = z.infer<typeof schema>;

export default function LoginScreen() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: LoginForm) => {
    const user = { email: data.email, token: 'fake-jwt-token' };
    dispatch(loginSuccess(user));
    router.replace('/(tabs)/home');
  };

  return (
    <View>
      <Text>Login</Text>
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextInput placeholder="Email" onChangeText={field.onChange} value={field.value} />
        )}
      />
      {errors.email && <Text>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <TextInput placeholder="Password" secureTextEntry onChangeText={field.onChange} value={field.value} />
        )}
      />
      {errors.password && <Text>{errors.password.message}</Text>}

      <Button title="Login" onPress={handleSubmit(onSubmit)} />
      <Button title="Register" onPress={() => router.push('/screens/RegisterScreen')} />
    </View>
  );
}
