<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181103145329 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE food_item ADD category_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE food_item ADD CONSTRAINT FK_AA3C8DCF12469DE2 FOREIGN KEY (category_id) REFERENCES food_category (id)');
        $this->addSql('CREATE INDEX IDX_AA3C8DCF12469DE2 ON food_item (category_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE food_item DROP FOREIGN KEY FK_AA3C8DCF12469DE2');
        $this->addSql('DROP INDEX IDX_AA3C8DCF12469DE2 ON food_item');
        $this->addSql('ALTER TABLE food_item DROP category_id');
    }
}
