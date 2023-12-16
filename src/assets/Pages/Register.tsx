import { Card, TextInput, Button, Group, Radio, PasswordInput, Title, Avatar, Text, Center } from '@mantine/core';
import { useState } from 'react';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import '../Styles/Register.css';
import { IconChevronRight } from '@tabler/icons-react';
function Register() {



  const [visible, { toggle }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      Mobile: '',
      Nicname: ''

    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      Mobile: (value) => (/^\d+$/.test(value) ? null : 'Invalid phone number'),

    },





  });



  const [value, setValue] = useState<Date | null>(null);

  return (
    <>
      <Card shadow="sm" w={1000} h={800} padding="lg" radius="xl" withBorder mx='20%' mt='1%' >


        <Card radius='xl' ml={-20} mt={-50} style={{ backgroundColor: 'yellow' }} w='55%' h='130%'  >



          <Avatar
            ml='8vw'
            mt='20vh'
            radius={100}
            size={200}
            component="a"
            href='https://www.instagram.com/p/Bh_p1MOBiQH/'
            target="_blank"
            src='https://avatars.githubusercontent.com/u/80002503?v=4'
            alt="ElBanano"
          />

          <Group position='center' w={480} p={30}>
            <Title >Evanan Semprun </Title>
            <Text align='center' >Bievenido Evanan Semprun estas en la pagina numero 1 a nivel mundia para ver porno gay</Text>

            <Group pt={12}>
            <Button color="dark" radius="100%" size="md" w='3vw' h='5vh'  leftIcon={<IconChevronRight  size='2vw' style={{marginLeft:'1vw'}} />} >
            

            </Button>

            </Group>
          </Group>

        </Card>




        <Group w='50%' mt='-98%' ml='60%' className='prueba' px={2}>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Card maw={400} mx="auto">

              <Title order={1} ta='center' >Registro De Ismael</Title>
              <TextInput label='Name' placeholder="Name" {...form.getInputProps('name')} pt={40} />


              <Radio.Group
                name="favoriteFramework"
                withAsterisk
                pt={15}
              >
                <Group mt="xs" >
                  <Radio value="react" label="Male" />
                  <Radio value="svelte" label="Female" />

                </Group>
              </Radio.Group>

              <DateInput pt={15}
                value={value}
                onChange={setValue}
                label="Date input"
                placeholder="Date input"
                maw={400}
              />


              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps('email')}
              />

              <TextInput label="Mobile" placeholder="Mobile" {...form.getInputProps('Mobile')} />
              <TextInput label="Nickname" placeholder="Nickname" {...form.getInputProps('Nickname')} />


              <PasswordInput
                label="Password"
                defaultValue="secret"
                visible={visible}
                onVisibilityChange={toggle}
              />
              <PasswordInput
                label="Confirm password"
                defaultValue="Mamalo"
                visible={visible}
                onVisibilityChange={toggle}
              />

              <Group position="center" mt="xl">
                <Button type="submit">
                  Registrar
                </Button>
              </Group>

            </Card>
          </form>
        </Group>
      </Card>
    </>
  )
}

export default Register