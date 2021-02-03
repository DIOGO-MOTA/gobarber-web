import React, { useState } from 'react';

import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setselectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src="https://xesque.rocketseat.dev/users/avatar/profile-31a0b5f7-47c7-47ca-8a87-637569a3b10a-1597091907966.jpg"
              alt={user.name}
            />

            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir</strong>

            <div>
              <img
                src="https://xesque.rocketseat.dev/users/avatar/profile-31a0b5f7-47c7-47ca-8a87-637569a3b10a-1597091907966.jpg"
                alt="diogo"
              />

              <strong>Diogo Mota</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://xesque.rocketseat.dev/users/avatar/profile-31a0b5f7-47c7-47ca-8a87-637569a3b10a-1597091907966.jpg"
                  alt="diogo"
                />

                <strong>Diogo Mota</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://xesque.rocketseat.dev/users/avatar/profile-31a0b5f7-47c7-47ca-8a87-637569a3b10a-1597091907966.jpg"
                  alt="diogo"
                />

                <strong>Diogo Mota</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://xesque.rocketseat.dev/users/avatar/profile-31a0b5f7-47c7-47ca-8a87-637569a3b10a-1597091907966.jpg"
                  alt="diogo"
                />

                <strong>Diogo Mota</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>

        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
