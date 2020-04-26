using Microsoft.EntityFrameworkCore.Migrations;

namespace cry_chan.Data.Migrations
{
    public partial class SeedCryChanTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder
                .Sql("INSERT INTO Boards (Name) Values ('a')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder
                .Sql("DELETE FROM Boards");
        }
    }
}
