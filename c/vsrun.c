#include <stdio.h>
#include <string.h>
#include <stdlib.h>


#define _CRT_SECURE_NO_WARNINGS
typedef struct {
    const char* c_element;
    const char* NEXT;
    const char* fun_key;
    const char* name;
    int brut;
} SpesItem;
typedef struct {
    const char* $;
    const char* name;
} VAR;
typedef struct {
    SpesItem items[5];
} Spes;
typedef struct {
    const char* equ_c;
    const char* equ_c_close;
    const char* name;
    int brut;
} FunItem;
typedef struct {
    FunItem items[10];
} Fun;
size_t getLength(const void* obj) {
    const char* charPtr = (const char*)obj;
    size_t length = 0;

    while (*charPtr++) {
        length++;
    }

    return length;
}
char* getString(int pos, int len, const char string[])
{
    char* substring = (char*)malloc((len + 1) * sizeof(char)); // Allouer de la mémoire pour la sous-chaîne
    int c = 0;
    while (c < len) {
        substring[c] = string[pos + c];
        c++;
    }
    substring[c] = '\0';
    return substring;
}

char* my_strtok(char* str, const char* delimiters) {
    static char* token = NULL;  // Pointeur vers le prochain token
    char* localNextToken = NULL;  // Variable locale pour stocker le prochain token

    if (str != NULL) {
        token = str;
    }
    else if (token == NULL) {
        return NULL;  // Aucune chaîne à découper
    }

    // Ignorer les délimiteurs initiaux
    while (*token && strchr(delimiters, *token)) {
        token++;
    }

    if (*token == '\0') {
        return NULL;  // Fin de la chaîne, plus de tokens
    }

    // Trouver la fin du token
    char* start = token;
    localNextToken = token;
    while (*localNextToken && !strchr(delimiters, *localNextToken)) {
        localNextToken++;
    }

    if (*localNextToken != '\0') {
        *localNextToken++ = '\0';  // Terminer le token et déplacer le pointeur au prochain caractère
    }

    token = localNextToken;  // Déplacer le pointeur token au prochain token

    return start;
}

// Fonction pour obtenir la position d'une sous-chaîne dans une chaîne
int getPosition(char* string, char* subString, int index) {
    char* ptr = string;

    int count = 0;
    while ((ptr = strstr(ptr, subString)) != NULL) {
        count++;
        if (count == index) {
            return ptr - string;
        }
        ptr += strlen(subString);
    }
    return -1;
}

// Fonction pour compter les occurrences d'une sous-chaîne dans une chaîne
int countOccurrences(char* string, char* target) {
    int count = 0;
    char* ptr = string;
    while ((ptr = strstr(ptr, target)) != NULL) {
        count++;
        ptr += strlen(target);
    }
    return count;
}

char* compil3r(char* string[5000], Spes spes, Fun funs, char* DebugMessage[5000]) {
    char string_sauv[10000] = "";
    strcat(string_sauv, string);
    char CODE[10000] = ""; // Allocate memory for the code
    strcat(CODE, DebugMessage);
    char* lignechaine[1000]; // Tableau pour stocker chaque ligne de la chaîne
    int lignechaine_count = 0;
    // Découper la chaîne en lignes
    char* line;
    const char s[8000] = "\n";
    line = my_strtok(string_sauv, s);
    while (line != NULL) {
        lignechaine[lignechaine_count++] = line;
        line = my_strtok(NULL, s);
    }

    for (int ii = 0; ii < lignechaine_count; ii++) {
        char ligne[8000] = "";
        strcpy(ligne, lignechaine[ii]);
        char ligne_sauv[1000] = "";
        strcat(ligne_sauv, ligne);

        char* spaceligne[1000]; // Tableau pour stocker chaque mot de la ligne
        int spaceligne_count = 0;
        const char sx[80] = " ";
        // Découper la ligne en mots

        char* word = my_strtok(ligne_sauv, sx);
        while (word != NULL) {
            spaceligne[spaceligne_count++] = word;
            word = my_strtok(NULL, sx);
        }

        char* NEXT = "new";
        char* iftype_name = NULL;
        char* iftype_type = NULL;
        int iftype_isActive = 0;
        int iffun_index = 0;
        char* iffun_name = "\0";
        char* iftype_innerCODE = (char*)malloc(1000 * sizeof(char)); // Allocate memory for the inner code
        iftype_innerCODE[0] = '\0'; // Initialize the inner code string as an empty string
        char* iftype_endkeyword = "END";
        char* iftype_fun_autre = "()";
        int iftype_brut = 0;

        for (int x = 0; x < spaceligne_count; x++) {
            char* space = spaceligne[x];
            if (strcmp(NEXT, "type") == 0) {
                iftype_name = space;
                NEXT = "name";
            }
            if (strcmp(NEXT, "function") == 0)
            {
                int start = getPosition(ligne, "(", 1) + 1;
                int end = getPosition(ligne, ")", countOccurrences(ligne, ")"));
                char STRING_TO_ARG[1000] = { '\0' };
                strncpy(STRING_TO_ARG, ligne + start, end - start);

                if (ligne[start] == '%') {
                    end = strrchr(ligne, ')') - ligne;
                    start += 1;
                    strncpy(STRING_TO_ARG, ligne + start, end - start);
                    STRING_TO_ARG[end - start] = '\0';
                    char* compiledCode = compil3r(STRING_TO_ARG, spes, funs, "");
                    int x = 10;
                }
                strcat(CODE, funs.items[iffun_index].equ_c);
                strcat(CODE, STRING_TO_ARG);
                strcat(CODE, funs.items[iffun_index].equ_c_close);
                strcat(CODE, "\n");
                NEXT = "new";

            }
            for (int xi = 0; xi < sizeof(spes) / sizeof(SpesItem); xi++) {
                if (strcmp(space, spes.items[xi].name) == 0) {
                    NEXT = "type";
                    iftype_brut = spes.items[xi].brut;
                    iftype_type = spes.items[xi].c_element;
                    iftype_fun_autre = spes.items[xi].fun_key;
                }
            }
            if (strcmp(space, "external_lib") == 0) {

            }
            for (int i = 0; i < sizeof(funs) / sizeof(FunItem); i++) {
                if (strcmp(space, funs.items[i].name) == 0) {
                    NEXT = "function";
                    iffun_index = i;
                    iffun_name = space;
                }
            }
            if (space[0] == '<') {
                char ch_keyword[1000] = "\0";
                strncpy(ch_keyword, space + 1, strlen(space) - 2);
                iftype_endkeyword = ch_keyword;
                int start = getPosition(string, ch_keyword, 1) + strlen(ch_keyword) + 1;
                int end = getPosition(string, ch_keyword, 2);
                char STRING_TO_COMPILE[10000] = "";
                strcat(STRING_TO_COMPILE, getString(start, end - start, string));
                char sn[] = "\n";
                int occ = countOccurrences(STRING_TO_COMPILE, sn);
                ii += occ;

                if (iftype_brut == 0) {
                    // TODO: Stocker le code compilé dans iftype_innerCODE
                    strcat(iftype_innerCODE, compil3r(STRING_TO_COMPILE, spes, funs, ""));
                }
                else {
                    strcat(iftype_innerCODE, STRING_TO_COMPILE);
                }
                strcat(CODE, iftype_type);
                strcat(CODE, "\x20");
                strcat(CODE, iftype_name);
                strcat(CODE, iftype_fun_autre);
                strcat(CODE, "{\n");
                strcat(CODE, iftype_innerCODE);
                strcat(CODE, "\n};\n");
            }
        }

    }
    return CODE;
}


int main(int argc, char* argv[]) {
    // Check if the correct number of command-line arguments is provided
    if (argc < 4 || argc > 6) {
        printf("Usage: vsrun -f <source_file> -d <destination_file> [-c <config_file>]\n");
        return 1;
    }
    // Variables to store the command-line arguments
    char* sourceFile = NULL;
    char* destinationFile = NULL;
    char* configFile = NULL;

    // Parse the command-line arguments
    for (int i = 1; i < argc; i++) {
        if (strcmp(argv[i], "-f") == 0) {
            if (i + 1 < argc) {
                sourceFile = argv[i + 1];
                i++;
            }
        }
        else if (strcmp(argv[i], "-d") == 0) {
            if (i + 1 < argc) {
                destinationFile = argv[i + 1];
                i++;
            }
        }
        else if (strcmp(argv[i], "-c") == 0) {
            if (i + 1 < argc) {
                configFile = argv[i + 1];
                i++;
            }
        }
    }

    // Check if all the required command-line arguments are provided
    if (sourceFile == NULL || destinationFile == NULL) {
        printf("Error: Required command-line arguments missing.\n");
        printf("Usage: vsrun -f <source_file> -d <destination_file> [-c <config_file>]\n");
        return 1;
    }

    // Open the source file in read mode
    FILE* file = fopen(sourceFile, "r");
    if (file == NULL) {
        printf("Unable to open the file %s\n", sourceFile);
        return 1;
    }

    // Read the contents of the source file
    char str[500000];
    size_t bytesRead = fread(str, sizeof(char), sizeof(str), file);
    str[bytesRead] = '\0'; // Add null-terminating character

    // Close the source file
    fclose(file);

    // Initialize Spes and other variables
    Spes spes = {
        {
            { "int", "type", "()", "intfun", 0 },
            { "char* ", "type", "()", "strfun", 0 },
            { "VARSTRING", "type", " = ", "%_STR", 1 },
            { "VARINT", "type", " = ", "%_INT", 1 },
            { "VARFILE", "type", " = ", "%_FILE", 1 },
        }
    };
    Fun funs = {
    {
        { "printf(", ");","printf" },
        { "printf(\"%s\", ", ");","varprint" },
        { "strcat(",");", "conc" },
        { "scanf(", ");","input" },
        { "return(",");", "return" },
        { "if (","};", "if" },
        { "#include <", ">", "import"},
        { "fget(", ");", "getfile"},
        { "fset(", ");", "setfile"},
        { "system(", ");", "command"}

    }
    };
    char debugMessage[] = "// code starting here, compile: https://loines.ch (you can unput this message)\n#include <stdio.h>\n#include <Windows.h>\ntypedef struct {\n char $[1000];\n} VARSTRING;\ntypedef struct {\nconst int $;\n} VARINT;\ntypedef struct {\nconst FILE* $;\n} VARFILE;\nvoid fset(const char* filePath, const char* data) { FILE* file = fopen(filePath, \"w+\"); if (file == NULL) { printf(\"Erreur : Impossible d'ouvrir le fichier %s.\"\n, filePath);\n return; } fprintf(file, \"\\0\"); fprintf(file, \"%s\", data); fclose(file); } char* fget(const char* filePath) { FILE* file = fopen(filePath, \"r\"); if (file == NULL) { printf(\"Erreur : Impossible d'ouvrir le fichier %s.\"\n\, filePath); return NULL; } char line[256]; char* content = (char*)malloc(1); size_t contentSize = 1; while (fgets(line, sizeof(line), file) != NULL) { size_t lineSize = strlen(line); content = realloc(content, contentSize + lineSize); strcat(content, line); contentSize += lineSize; } fclose(file); return content; }\nchar* GuP(const char* directory) { char userProfile[MAX_PATH]; if (GetEnvironmentVariableA(\"USERPROFILE\", userProfile, sizeof(userProfile)) == 0) { printf(\"Erreur : Impossible d'obtenir le chemin de profil de l'utilisateur.\\n\"); return NULL; } char* userPath = (char*)malloc(MAX_PATH); snprintf(userPath, MAX_PATH, \"%s\\%s\", userProfile, directory); return userPath; }\n";
    char* compiledCode = compil3r(str, spes, funs, debugMessage);

    // Open the destination file in write mode
    FILE* destFile = fopen(destinationFile, "w");
    if (destFile == NULL) {
        printf("Unable to open the destination file\n");
        return 1;
    }

    // Write the compiled code to the destination file
    fprintf(destFile, "%s", compiledCode);

    // Close the destination file
    fclose(destFile);

    // Free the dynamically allocated memory

    // Execute the command "vsex3c" if the "-c" argument is not passed
    if (configFile == NULL) {
        char command[100];
        sprintf(command, "vsex3c -f %s", destinationFile);
        system(command);
    }

    return 0;
}
