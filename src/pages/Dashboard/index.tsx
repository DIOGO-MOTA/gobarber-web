import React, { useCallback, useEffect, useMemo, useState } from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

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
import api from '../../services/api';

interface MonthAvailabilityItem {
  day: number;
  available: boolean;
}

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  const [selectedDate, setselectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [monthAvailability, setMonthAvailability] = useState<MonthAvailabilityItem>([]);

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setselectedDate(day);
    }
  }, []);

  const handleMontChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, [])

  useEffect(() => {
    api.get(`/providers/${user.id}/month-availability`, {
      params: {
        year: currentMonth.getFullYear(),
        month: currentMonth.getMonth() + 1,
      }
    }).then(response => {
      setMonthAvailability(response.data)
    })
  }, [currentMonth, user.id]);

  //const disabledDays = useMemo(() => {
  //   const dates = monthAvailability
  //  .filter(monthDay => monthDay.availability === false)
  //  .map(monthDay => {
  //    const year = currentMonth.getFullYear();
  //    const month = currentMonth.getMonth();

  //    return new Date(year, month, monthDay.day);
  //   });

  //    return dates,
  //},[currentMonth, monthAvailability]);


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

        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            onMonthChange={handleMontChange}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
