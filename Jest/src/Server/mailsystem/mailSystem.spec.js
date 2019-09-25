/* eslint-disable jest/no-disabled-tests */
import mailSystem from './mailSystem';
import smtpTransport from './smtpTransport';
import repository from './repository';

describe.skip('Mail system tests.', () => {
  let to;
  let subject;
  let model;
  const name = 'Allison Van den Bergh';
  let sendWelcomeMailMock;

  describe('Send welcome mail tests.', () => {
    beforeEach(() => {
      to = 'vandenberhallison.30@telenet.be';
      subject = 'Welcome in programming.';
      model = {
        name,
      };
      sendWelcomeMailMock = jest.spyOn(smtpTransport, 'send').mockImplementation(() => {});
    });

    test('should send welcome mail from default mail.', () => {
      // arrange
      mailSystem.init();

      // act
      mailSystem.sendWelcomeMail(to, subject, model);

      // assert
      expect(sendWelcomeMailMock).toHaveBeenCalledWith({
        toAddress: to,
        subject,
        body: `Hello Allison Van den Bergh, with this mail I...`,
        fromAddress: 'noreply@euri.com',
      });
    });

    test('should send welcome mail with specific from address', () => {
      // arrange
      mailSystem.init('seppe.marien@euri.com');

      // act
      mailSystem.sendWelcomeMail(to, subject, model);

      // assert
      expect(sendWelcomeMailMock).toHaveBeenCalledWith(
        expect.objectContaining({ fromAddress: 'seppe.marien@euri.com' }),
      );
    });
  });

  describe('Transfer mail tests.', () => {
    test('should transfer mails from repo to backend', () => {
      // arrange
      const mails = [
        {
          id: 1,
          to: 'seppe.marien@euri.com',
          body: 'Hey hey seppos',
        },
        {
          id: 2,
          to: 'vandenberghallison@telenet.be',
          body: 'hey hey son!',
        },
        {
          id: 3,
          to: 'allison.vandenbergh@euri.com',
          body: 'welcome!',
        },
      ];
      jest.spyOn(repository, 'getMails').mockImplementation(() => mails);
      const backend = {
        transfer: jest.fn(),
      };

      // act
      mailSystem.transferMails(backend);

      expect(backend.transfer).toHaveBeenCalledWith(
        expect.objectContaining([
          {
            id: 1,
            to: 'seppe.marien@euri.com',
            body: 'Hey hey seppos',
          },
          {
            id: 3,
            to: 'allison.vandenbergh@euri.com',
            body: 'welcome!',
          },
        ]),
      );
    });
  });
});
